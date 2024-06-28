import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    selectedImageSrc: '',
    currentBlockId: 1,
    openedModals: []
  }),
  actions: {
    open(content) {
      this.openedModals.push(content);
    },
    close() {
      this.openedModals.pop();
    },
    setSelectedImageSrc(src) {
      console.log(src);
      this.selectedImageSrc = src;
    },
    setBlockId(id) {
      this.currentBlockId = id;
    }
  }
});
