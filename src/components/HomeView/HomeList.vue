<template>
  <div class="project">
    <ul
      v-if="projects.length !== 0"
      class="project__list">
      <HomeItem
        v-for="project of projects"
        :key="project.id"
        :project="project"/>
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
import { useProjectsStore } from '@/stores/modules/projects'

import HomeItem from '@/components/HomeView/HomeItem.vue'

export default {
  components: {
    HomeItem
  },
  computed: {
    projects() {
      return useProjectsStore().projects;
    }
  }
}
</script>