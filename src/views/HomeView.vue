<template>
  <div class="home-panel">
    <div class="home-panel__wrapper">
      <div class="home-panel__title">Мои проекты:</div>
      <div class="home-panel__right-side">
        <HomeItemAdd @addProjectItem="addProjectItem"/>
      </div>
    </div>
  </div>

  <HomeList
    :projects="projects"
    @delProjectItem="delProjectItem"/>
</template>

<script>
import JsonProjectsData from '@/data/JsonProjectsData.json';

import HomeList from '@/components/HomeView/HomeList.vue'
import HomeItemAdd from '@/components/HomeView/HomeItemAdd.vue'

export default {
  name: 'App',
  data() {
    return {
      projects: []
    }
  },
  components: {
    HomeList, HomeItemAdd
  },
  methods: {
    addProjectItem(project) {
      this.projects.push(project);
    },
    delProjectItem(id) {
      this.projects.splice(id, 1);
    }
  },
  mounted() {
    this.projects = JsonProjectsData;
  }
}
</script>