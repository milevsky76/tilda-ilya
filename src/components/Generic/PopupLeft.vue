<template>
  <div
    v-if="isOpen"
    :class="['overlay', { 'show': isOpen }]"
    @mousedown="close">
    <div
      :class="{ 'popup-left': true, 'show': isOpen }"
      @mousedown.stop>
      <div class="popup-left__controls">
        <div class="popup-left__find-block">
          <input
            class="popup-left__search-input"
            id=""
            type="text"
            name="find"
            placeholder="Библиотека блоков">

          <button
            type="button"
            class="popup-left__search">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none"><path stroke="#000" stroke-linecap="round" stroke-width="1.3" d="M10.485 10.182c-1.775 2.116-4.908 2.409-6.999.655-2.09-1.755-2.346-4.891-.57-7.007 1.774-2.115 4.908-2.408 6.998-.654s2.346 4.891.571 7.006Zm0 0 3.155 2.647"/></svg>
          </button>

          <button
            @click="close"
            class="popup-left__close"
            type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-x" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <div class="popup-left__types-wrapper">
          <button
            v-for="blockType in blocksTypes"
            :key="blockType.type"
            :class="['popup-left__types-block', {'active': activeTab == blockType.type}]"
            @click="activeTab = blockType.type"
            type="button">
              {{ blockType.title }}
          </button>
        </div>
      </div>
      <div class="popup-left__blocks">
        <div
          v-if="activeTab === 'text'"
          class="popup-left__blocks-text">
          <button @click="addTextBlock">
            <h2>Блок с текстом</h2>
            <div>Lorem ipsum dolor sit amet.</div>
          </button>

          <button @click="addTextBlock">
            <h2>Блок с текстом</h2>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
          </button>
        </div>
        <div
          v-if="activeTab === 'cover'"
          class="popup-left__blocks-image">
          <button @click="addImageBlock" class="">
            <div>
              <img src="https://plus.unsplash.com/premium_photo-1718119453300-73be4e1b6212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
            </div>
            <h2>Блок с текстом и фоновой картинкой</h2>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePageBlocksStore } from '@/stores/modules/blocks';

export default {
  data() {
    return {
      activeTab: 'text', //cover
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: {
    ok: null,
    close: null
  },
  methods: {
    close(event) {
      this.$emit('close')
    },
    addTextBlock() {
      const textBlock = {
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, officiis?'
      }

      usePageBlocksStore().addTextBlock(textBlock)
    },
    addImageBlock() {
      const imageBlock = {
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, officiis?',
        image: 'https://plus.unsplash.com/premium_photo-1718119453300-73be4e1b6212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }

      usePageBlocksStore().addImageBlock(imageBlock)
    }
  },
  computed: {
    blocksTypes() {
      return usePageBlocksStore().blocksTypes
    }
  },
};
</script>
