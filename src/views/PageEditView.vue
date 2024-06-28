<template>
  <div>
    <div 
      v-for="(block, index) in blocks"
      :key="index"
      :class="block.type">
      <template v-if="block.type === 'text'">
        <div class="block-text edit">
          <p
            contenteditable
            @input="updateText($event, block.id)">
              {{ block.content }}
          </p>
        </div>
      </template>

      <template v-else-if="block.type === 'image'">
        <div class="block-image edit">
          <img
            :src="block.image"
            alt="Изображение">
          <p
            contenteditable
            @input="updateText($event, block.id)">
              {{ block.content }}
          </p>
        </div>
      </template>
    </div>
  </div>

  <div class="page-edit">
    <div class="page-edit__middle-button">
      <button
        class="project-view__new-page"
        type="button"
        @click="isPopupOpen = true">
          <span class="project-view__new-page-text">Добавить запись</span>
      </button>
    </div>
  </div>

  <PopupLeft
    :isOpen="isPopupOpen"
    :pageId="pageId"
    @close="isPopupOpen = false"/>
</template>

<script>
import { useProjectsStore } from '@/stores/modules/projects';
import { usePagesStore } from '@/stores/modules/pages';
import { usePageBlocksStore } from '@/stores/modules/blocks';

import HeaderPage from '@/components/HeaderPage.vue';

import PopupLeft from '@/components/Generic/PopupLeft.vue';

export default {
  data() {
    return {
      isPopupOpen: false
    };
  },
  props: {
    id: {
      type: String,
      required: true
    },
    pageId: {
      type: String,
      required: true
    }
  },
  components: {
    PopupLeft, HeaderPage
  },
  methods: {
    updateText(event, id) {
      const newText = event.target.textContent.trim()
      usePageBlocksStore().updateTextBlock(id, newText)
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
      return usePageBlocksStore().getBlocksByPageId(+this.pageId);
    },
  }
};
</script>