import { defineStore } from 'pinia';

const defaultState = {
  blocksTypes: [
    {
      type: 'text',
      title: 'Текстовые блоки'
    },
    {
      type: 'cover',
      title: 'Обложки'
    }
  ],
  blocks: [
    {
      pageId: 0,
      id: 0,
      type: 'text',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, officiis?',
      index: 0
    }
  ],
  // key 0: - is pageId
  blocksIndexes: {
    0: {
      nextIndex: 1
    }
  },
  nextId: 1
};

export const usePageBlocksStore = defineStore({
  id: 'pageBlocks',
  state: () => {
    const storedState = localStorage.getItem('blocksState');
    let blocksState = null;

    if (storedState) {
      blocksState = JSON.parse(storedState);
    } else {
      localStorage.setItem('blocksState', JSON.stringify(defaultState));
      blocksState = defaultState;
    }

    return blocksState;
  },
  getters: {
    getBlocksByPageId: (state) => (pageId) => {
      let indexState = state.blocksIndexes[pageId];
      if (!indexState) {
        state.blocksIndexes[pageId] = {
          nextIndex: 0
        };
      }
      return state.blocks.filter((block) => block.pageId === pageId);
    },
    getBlockById: (state) => (id) => {
      return state.blocks.find((block) => block.id === id);
    }
  },
  actions: {
    saveState() {
      localStorage.setItem('blocksState', JSON.stringify(this.$state));
    },
    addTextBlock(textBlock, beforeBlockId = undefined) {
      const indexState = getIndex(this, textBlock);

      if (beforeBlockId === undefined) {
        this.blocks.push({
          type: 'text',
          ...textBlock,
          id: this.nextId++,
          index: indexState.nextIndex++
        });
      } else {
        const beforeBlock = getBlock(this.blocks, textBlock.pageId, beforeBlockId);
        const allPageBlocks = this.getBlocksByPageId(textBlock.pageId);
        allPageBlocks.forEach((block) => {
          if (block.index > beforeBlock.index) {
            block.index++;
          }
        });
        this.blocks.push({
          type: 'text',
          ...textBlock,
          id: this.nextId++,
          index: beforeBlock.index + 1
        });
        indexState.newText++;
      }

      this.saveState();
    },
    addImageBlock(imageBlock) {
      const indexState = getIndex(this, imageBlock);

      this.blocks.push({
        type: 'image',
        ...imageBlock,
        id: this.nextId++,
        index: indexState.nextIndex++
      });

      this.saveState();
    },
    updateTextBlock(pageId, index, newText) {
      const currentBlock = getBlock(this.blocks, pageId, index);
      currentBlock.content = newText;

      this.saveState();
    }
  }
});

function getIndex(state, block) {
  const pageId = block.pageId;
  return state.blocksIndexes[pageId];
}

function getBlock(allBlocks, pageId, index) {
  return allBlocks.find((block) => block.pageId === pageId && block.index === index);
}

function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}
