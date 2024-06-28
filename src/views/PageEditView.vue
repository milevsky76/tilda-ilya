<template>
  <div>
    <div 
      v-for="(block, index) in blocks"
      :key="index"
      :class="block.type"
      class="page-block"
    >
      <template v-if="block.type === 'text'">
        <div class="block-text edit">
          <p
            contenteditable
            @input="updateText($event, block.pageId, index)">
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
            @input="updateText($event, block.pageId, index)">
              {{ block.content }}
          </p>
        </div>
      </template>

      <button class="page-block__add-block-button" @click="openPopup(block.index)">
        <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img" aria-hidden="true"><path d="M26.79 13H17V3.21h-4V13H3.21v4H13v9.79h4V17h9.79v-4z"></path></svg>
      </button>
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
    :beforeBlockIndex="beforeBlockIndex"
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
      isPopupOpen: false,
      beforeBlockIndex: undefined
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
    updateText(event, pageId, index) {
      const newText = event.target.textContent.trim()
      usePageBlocksStore().updateTextBlock(pageId, index, newText)
    },
    openPopup(index) {
      this.beforeBlockIndex = index
      this.isPopupOpen = true
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
      const blocks = usePageBlocksStore().getBlocksByPageId(+this.pageId);
      return JSON.parse(JSON.stringify(blocks.sort((a, b) => a.index - b.index))) 
    },
  }
};
</script>