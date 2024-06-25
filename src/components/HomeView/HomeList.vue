<template>
  <div class="project">
    <ul
      v-if="projects.length !== 0"
      class="project__list">
      <HomeItem
        v-for="(project, i) of projects"
        :key="project.id"
        :project="project"
        :index="i"
        @deleteItem="handleDeleteItem" />
      <li>
        <div></div>
      </li>
    </ul>
    <h3
      v-show="projects.length === 0"
      class="project__empty-text">
      Проектов нет
    </h3>
  </div>
</template>

<script>
import HomeItem from '@/components/HomeView/HomeItem.vue'

export default {
  props: ['projects'],
  components: {
    HomeItem
  },
  methods: {
    handleDeleteItem(itemId) {
      this.projects.splice(itemId, 1);
    }
  }
}
</script>