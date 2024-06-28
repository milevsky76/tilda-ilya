<template>
  <div class="image-text-block-settings">
    <div class="modal__title">Настройка блока</div>
    <div class="modal__content">
      <div class="modal__edit-block-text-panel">
        <div
          class="page-block__editable-text"
          contenteditable
          @blur="currentBlock.content = $event.target.innerText"
        >
          {{ currentBlock?.content }}
        </div>
      </div>
      <button
        class="button button--filled button--rounded image-text-block-settings__select-image-button"
        @click="openSelectImageModal"
      >
        Выбрать изображение
      </button>
    </div>
    <div class="modal__actions">
      <button class="button button--filled button--rounded" @click="saveChanges">Сохранить</button>
    </div>
  </div>
</template>

<script>
import { useModalStore } from '@/stores/modules/modal';
import { usePageBlocksStore } from '@/stores/modules/blocks';
import { mapActions, mapState } from 'pinia';
import ImageSelectorModalContent from './ImageSelectorModalContent.vue';

export default {
  computed: {
    ...mapState(useModalStore, ['currentBlockId', 'selectedImageSrc']),
    ...mapState(usePageBlocksStore, ['getBlockById'])
  },
  data() {
    return {
      currentBlock: {}
    };
  },
  watch: {
    selectedImageSrc(newSrc, oldSrc) {
      console.log(newSrc);
      this.currentBlock.image = newSrc;
    }
  },
  methods: {
    ...mapActions(useModalStore, ['close', 'open']),
    ...mapActions(usePageBlocksStore, ['update']),
    saveChanges() {
      this.update(this.currentBlockId, this.currentBlock);
      this.close();
    },
    openSelectImageModal() {
      this.open(ImageSelectorModalContent);
    }
  },
  mounted() {
    this.currentBlock = JSON.parse(JSON.stringify(this.getBlockById(this.currentBlockId)));
  }
};
</script>
