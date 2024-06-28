<template>
  <div v-for="(modal, index) in openedModals" :key="index" class="modal modal--open">
    <div v-show="index === openedModals.length - 1" class="modal__backdrop" @click="close"></div>
    <div class="modal__content-wrap">
      <component :is="modal"></component>
    </div>
  </div>
</template>

<script>
import { useModalStore } from '@/stores/modules/modal';
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(useModalStore, ['openedModals'])
  },
  methods: {
    ...mapActions(useModalStore, ['close'])
  }
};
</script>
