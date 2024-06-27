import { defineStore } from 'pinia'

export const usePageBlocksStore = defineStore({
  id: 'pageBlocks',
  state: () => ({
    blocks: [],
    activeBlockIndex: -1,
  }),
  actions: {
    addTextBlock(textBlock) {
      this.blocks.push({ type: 'text', ...textBlock })
    },
    addImageBlock(imageBlock) {
      this.blocks.push({ type: 'image', ...imageBlock })
    },
    updateTextBlock(index, newText) {
      this.blocks[index].content = newText
    }
  }
})