<template>
  <div>
    <div 
      v-for="block in blocks"
      :key="block.id"
      :class="block.type">
        <template v-if="block.type === 'text'">
          <div class="block-text">
            <p>{{ block.content }}</p>
          </div>
        </template>
        <template v-else-if="block.type === 'image'">
          <div class="block-image">
            <img :src="block.image" alt="Изображение">
            <p>{{ block.content }}</p>
          </div>
        </template>
    </div>
  </div>
</template>

<script>
import { useProjectsStore } from '@/stores/modules/projects';
import { usePagesStore } from '@/stores/modules/pages';
import { usePageBlocksStore } from '@/stores/modules/blocks';

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
    },
    pageId: {
      type: String,
      required: true,
    }
  },
  computed: {
    pages() {
      return usePagesStore().getPageById(+this.id)
    },
    project() {
      return useProjectsStore().getProjectById(this.pages.projectId)
    },
    blocks() {
      return usePageBlocksStore().getBlocksByPageId(+this.pageId)
    },
  },
};
</script>