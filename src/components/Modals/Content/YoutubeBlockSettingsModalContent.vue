<template>
  <div>
    <div class="modal__title">Настройка блока</div>
    <div class="modal__content">
      <div class="modal__edit-block-text-panel">
        <div
          class="page-block__editable-text"
          contenteditable
          @blur="currentBlock.videoId = $event.target.innerText"
        >
          {{ currentBlock?.videoId }}
        </div>
      </div>
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

export default {
  data() {
    return {
      currentBlock: {}
    };
  },
  computed: {
    ...mapState(useModalStore, ['currentBlockId']),
    ...mapState(usePageBlocksStore, ['getBlockById'])
  },
  methods: {
    ...mapActions(useModalStore, ['close']),
    ...mapActions(usePageBlocksStore, ['update']),
    saveChanges() {
      this.update(this.currentBlockId, this.currentBlock);
      this.close();
    }
  },
  mounted() {
    this.currentBlock = JSON.parse(JSON.stringify(this.getBlockById(this.currentBlockId)));
  }
};
</script>
