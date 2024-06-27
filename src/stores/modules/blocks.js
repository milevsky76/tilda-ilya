import {
  defineStore
} from 'pinia'

export const usePageBlocksStore = defineStore({
  id: 'pageBlocks',
  state: () => ({
    blocks: [],
    blocksTypes: [{
        type: 'text',
        title: 'Текстовые блоки'
      },
      {
        type: 'cover',
        title: 'Обложки'
      }
    ],
    activeBlockIndex: -1,
  }),
  actions: {
    addTextBlock(textBlock) {
      this.blocks.push({
        type: 'text',
        ...textBlock
      })
    },
    addImageBlock(imageBlock) {
      this.blocks.push({
        type: 'image',
        ...imageBlock
      })
    },
    updateTextBlock(index, newText) {
      this.blocks[index].content = newText
    },
    filterBlocks(query) {
      const lowerCaseQuery = query.toLowerCase();
      this.blocksTypes = this.state.blocksTypes.filter(block =>
        block.title.toLowerCase().includes(lowerCaseQuery)
      );
    },
  }
})