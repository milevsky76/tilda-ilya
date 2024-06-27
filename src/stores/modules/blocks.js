import {
  defineStore
} from 'pinia'

export const usePageBlocksStore = defineStore({
  id: 'pageBlocks',
  state: () => ({
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
    nextId: 1,
    activeBlockIndex: -1,
  }),
  getters: {
    getBlocksByPageId: (state) => (pageId) => {
      return state.blocks.filter(block => block.pageId === pageId);
    },
    getBlockById: (state) => (id) => {
      return state.blocks.find(block => block.id === id);
    },
  },
  actions: {
    addTextBlock(textBlock) {
      this.blocks.push({
        type: 'text',
        ...textBlock,
        id: this.nextId++
      })
    },
    addImageBlock(imageBlock) {
      this.blocks.push({
        type: 'image',
        ...imageBlock,
        id: this.nextId++
      })
    },
    updateTextBlock(index, newText) {
      this.blocks[index].content = newText
    },
    // filterBlocks(query) {
    //   const lowerCaseQuery = query.toLowerCase();
    //   this.blocksTypes = this.state.blocksTypes.filter(block =>
    //     block.title.toLowerCase().includes(lowerCaseQuery)
    //   );
    // },
  }
})