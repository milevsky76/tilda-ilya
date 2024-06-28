import {
  defineStore
} from 'pinia';

const defaultState = {
  blocksTypes: [{
      type: 'text',
      title: 'Текстовые блоки'
    },
    {
      type: 'cover',
      title: 'Обложки'
    }
  ],
  blocks: [{
    pageId: 0,
    id: 0,
    type: 'text',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, officiis?'
  }],
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
      return state.blocks.filter(block => block.pageId === pageId);
    },
    getBlockById: (state) => (id) => {
      return state.blocks.find(block => block.id === id);
    },
  },
  actions: {
    saveState() {
      localStorage.setItem('blocksState', JSON.stringify(this.$state));
    },
    addTextBlock(textBlock) {
      this.blocks.push({
        type: 'text',
        ...textBlock,
        id: this.nextId++
      });

      this.saveState();
    },
    addImageBlock(imageBlock) {
      this.blocks.push({
        type: 'image',
        ...imageBlock,
        id: this.nextId++
      });

      this.saveState();
    },
    updateTextBlock(id, newText) {
      const index = this.blocks.findIndex(block => block.id === id);

      if (index !== -1) {
        this.blocks[index].content = newText;

        this.saveState();
      }
    }
  }
});