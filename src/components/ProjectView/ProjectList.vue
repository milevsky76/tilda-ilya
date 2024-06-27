<template>
  <ul
    v-if="pages.length !== 0"
    class="pages-list">
    <ProjectItem 
      v-for="page of pages"
      :key="page.id"
      :page="page"/>
  </ul>
  <h3
    v-show="pages.length === 0"
    class="pages-list__empty-text">
      Страниц сайта нет
  </h3>
</template>

<script>
import ProjectItem from '@/components/ProjectView/ProjectItem.vue'

export default {
  props: {
    pages: {
      type: Object,
      required: true,
    }
  },
  components: {
    ProjectItem
  }
}
</script>