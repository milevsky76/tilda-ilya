<template>
  <div>
    <div v-for="(block, index) in blocks" :key="index" :class="block.type">
      <template v-if="block.type === 'text'">
        <div class="block-text">
          <p>{{ block.content }}</p>
        </div>
      </template>

      <template v-else-if="block.type === 'image'">
        <div class="block-image">
          <img :src="block.image" alt="Изображение" />
          <p>{{ block.content }}</p>
        </div>
      </template>

      <template v-else-if="block.type === 'youtube'">
        <div class="block-youtube">
          <YouTube :src="block.videoId" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import YouTube from 'vue3-youtube';
import { useProjectsStore } from '@/stores/modules/projects';
import { usePagesStore } from '@/stores/modules/pages';
import { usePageBlocksStore } from '@/stores/modules/blocks';

export default {
  components: {
    YouTube
  },
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
  }
};
</script>
