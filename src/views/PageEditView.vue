<template>
  <HeaderPage :id="id"/>
  <div>
    <div v-for="(block, index) in blocks" :key="index" :class="block.type">
      <!-- Вывод содержимого блока в зависимости от типа -->
      <template v-if="block.type === 'text'">
        <div class="block-text">
          <p contenteditable @input="updateText($event, index)">{{ block.content }}</p>
        </div>
      </template>
      <template v-else-if="block.type === 'image'">
        <div class="block-image">
          <img :src="block.image" alt="Изображение">
          <p contenteditable @input="updateText($event, index)">{{ block.content }}</p>
        </div>
      </template>
    </div>
  </div>

  <div class="page-edit">
    <div class="page-edit__middle-button">
      <button
        @click="isPopupOpen = true"
        class="project-view__new-page"
        type="button">
          <span class="project-view__new-page-text">Добавить запись</span>
      </button>
    </div>
  </div>
  <PopupLeft
    :isOpen="isPopupOpen"
    @close="isPopupOpen = false"/>
</template>

<script>
import { useProjectsStore } from '@/stores/modules/projects';
import { usePagesStore } from '@/stores/modules/pages';
import { usePageBlocksStore } from '@/stores/modules/blocks';

import PopupLeft from '@/components/Generic/PopupLeft.vue';

import HeaderPage from '@/components/HeaderPage.vue';

export default {
  name: 'PageBlocks',
  data() {
    return {
      isPopupOpen: false,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  components: {
    PopupLeft, HeaderPage
  },
  methods: {
    updateText(event, index) {
      const newText = event.target.textContent.trim()
      usePageBlocksStore().updateTextBlock(index, newText)
    }
  },
  computed: {
    pages() {
      return usePagesStore().getPageById(+this.id);
    },
    project() {
      return useProjectsStore().getProjectById(this.pages.projectId);
    },
    blocks() {
      return usePageBlocksStore().blocks
    },
  },
};
</script>