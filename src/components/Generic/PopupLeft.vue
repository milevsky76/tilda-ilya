<template>
  <div v-if="isOpen" class="overlay" @mousedown="close">
    <div :class="{ 'popup-left': true, 'show': isOpen }" @mousedown.stop>
      <div class="cl1">
        <input type="text" name="" id="" placeholder="Библиотека блоков">
        <button type="button">Поиск</button>
        <button type="button" @click="close">Закрыть</button>
        <hr>
        <button @click="activeTab = 'text'" type="button">Текстовые блоки</button>
        <button @click="activeTab = 'cover'" type="button">Обложки</button>
      </div>
      <div class="cl2">
        <div v-if="activeTab === 'text'">
          <button @click="addTextBlock" class="">
            <h2>Блок с текстом</h2>
            <div>Lorem ipsum dolor sit amet.</div>
          </button>
          <button @click="addTextBlock" class="">
            <h2>Блок с текстом</h2>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
          </button>
        </div>
        <div v-if="activeTab === 'cover'">
          <button @click="addImageBlock" class="">
            <img src="https://plus.unsplash.com/premium_photo-1718119453300-73be4e1b6212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
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
  }
};
</script>
