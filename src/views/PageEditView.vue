<template>
  <div>
    <div v-for="(block, index) in blocks" :key="index" :class="block.type" class="page-block">
      <template v-if="block.type === 'text'">
        <div class="block-text edit">
          <p contenteditable @blur="updateText($event, block.pageId, index)">
            {{ block.content }}
          </p>
        </div>
      </template>

      <template v-else-if="block.type === 'image'">
        <div class="block-image edit">
          <img :src="block.image" alt="Изображение" />
          <p contenteditable @blur="updateText($event, block.pageId, index)">
            {{ block.content }}
          </p>
        </div>
      </template>

      <template v-else-if="block.type === 'youtube'">
        <div class="block-youtube edit">
          <YouTube :src="block.videoId" />
        </div>
      </template>

      <button class="page-block__add-block-button" @click="openPopup(block.index)">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          role="img"
          aria-hidden="true"
        >
          <path d="M26.79 13H17V3.21h-4V13H3.21v4H13v9.79h4V17h9.79v-4z"></path>
        </svg>
      </button>

      <div class="page-block__block-actions">
        <button @click="moveBlockUp(block.pageId, block.index)">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_iconCarrier">
              <path
                d="M24.0083 14.1005V42"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12 26L24 14L36 26"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12 6H36"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </button>
        <button @click="cloneBlock(block.pageId, block.index)">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            fill="currentColor"
          >
            <g id="SVGRepo_iconCarrier">
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                sketch:type="MSPage"
              >
                <g
                  id="Icon-Set"
                  sketch:type="MSLayerGroup"
                  transform="translate(-204.000000, -931.000000)"
                  fill="currentColor"
                >
                  <path
                    d="M234,951 C234,952.104 233.104,953 232,953 L216,953 C214.896,953 214,952.104 214,951 L214,935 C214,933.896 214.896,933 216,933 L232,933 C233.104,933 234,933.896 234,935 L234,951 L234,951 Z M232,931 L216,931 C213.791,931 212,932.791 212,935 L212,951 C212,953.209 213.791,955 216,955 L232,955 C234.209,955 236,953.209 236,951 L236,935 C236,932.791 234.209,931 232,931 L232,931 Z M226,959 C226,960.104 225.104,961 224,961 L208,961 C206.896,961 206,960.104 206,959 L206,943 C206,941.896 206.896,941 208,941 L210,941 L210,939 L208,939 C205.791,939 204,940.791 204,943 L204,959 C204,961.209 205.791,963 208,963 L224,963 C226.209,963 228,961.209 228,959 L228,957 L226,957 L226,959 L226,959 Z"
                    id="duplicate"
                    sketch:type="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button @click="removeBlock(block.pageId, block.id)">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_iconCarrier">
              <path
                d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
                stroke="currentColor"
                stroke-width="2"
              ></path>
            </g>
          </svg>
        </button>
        <button @click="moveBlockDown(block.pageId, block.index)">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_iconCarrier">
              <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect>
              <path
                d="M24.0083 33.8995V6"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M36 22L24 34L12 22"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M36 42H12"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>

      <button
        class="button button--filled button--rounded page-block__edit-content-button"
        @click="openEditBlockModal(block.type, block.id, block.image)"
      >
        Контент
      </button>
    </div>
  </div>

  <div class="page-edit">
    <div class="page-edit__middle-button">
      <button class="project-view__new-page" type="button" @click="openPopup(undefined)">
        <span class="project-view__new-page-text">Добавить запись</span>
      </button>
    </div>
  </div>

  <PopupLeft
    :isOpen="isPopupOpen"
    :pageId="pageId"
    :beforeBlockIndex="beforeBlockIndex"
    @close="isPopupOpen = false"
  />
</template>

<script>
import { useProjectsStore } from '@/stores/modules/projects';
import { usePagesStore } from '@/stores/modules/pages';
import { usePageBlocksStore } from '@/stores/modules/blocks';
import { mapActions } from 'pinia';

import HeaderPage from '@/components/HeaderPage.vue';

import PopupLeft from '@/components/Generic/PopupLeft.vue';
import { useModalStore } from '@/stores/modules/modal';
import TextBlockSettingsModalContent from '@/components/Modals/Content/TextBlockSettingsModalContent.vue';
import ImageTextBlockSettingsModalContent from '@/components/Modals/Content/ImageTextBlockSettingsModalContent.vue';
import YouTube from 'vue3-youtube';
import YoutubeBlockSettingsModalContent from '@/components/Modals/Content/YoutubeBlockSettingsModalContent.vue';

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
    PopupLeft,
    HeaderPage,
    YouTube
  },
  methods: {
    ...mapActions(usePageBlocksStore, ['moveUp', 'moveDown', 'remove', 'duplicate', 'initHistory']),
    ...mapActions(useModalStore, ['setBlockId', 'open', 'setSelectedImageSrc']),
    updateText(event, pageId, index) {
      const newText = event.target.textContent.trim();
      usePageBlocksStore().updateTextBlock(pageId, index, newText);
    },
    openPopup(index) {
      this.beforeBlockIndex = index;
      this.isPopupOpen = true;
    },
    cloneBlock(pageId, index) {
      this.duplicate(pageId, index);
    },
    removeBlock(pageId, id) {
      this.remove(pageId, id);
    },
    moveBlockUp(pageId, index) {
      this.moveUp(pageId, index);
    },
    moveBlockDown(pageId, index) {
      this.moveDown(pageId, index);
    },
    openEditBlockModal(type, id, src) {
      this.setBlockId(id);
      let modalContent = null;
      switch (type) {
        case 'text':
          modalContent = TextBlockSettingsModalContent;
          break;
        case 'image':
          this.setSelectedImageSrc(src);
          modalContent = ImageTextBlockSettingsModalContent;
          break;
        case 'youtube':
          modalContent = YoutubeBlockSettingsModalContent;
          break;
      }
      this.open(modalContent);
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
      return JSON.parse(JSON.stringify(blocks.sort((a, b) => a.index - b.index)));
    }
  },
  mounted() {
    this.initHistory();
  }
};
</script>
