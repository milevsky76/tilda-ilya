<template>
  <ul
    v-if="pages.length !== 0"
    class="pages-list">
    <ProjectItem 
    v-for="(page, i) of pages"
    :key="page.id"
    :page="page"
    :index="i"
    @delPageItem="delPageItem"/>
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
  data() {
    return { }
  },
  props: ['pages'],
  components: {
    ProjectItem
  },
  methods: {
    delPageItem(id) {
      this.pages.splice(id, 1);
    }
  }
}
</script>