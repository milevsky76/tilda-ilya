<template>
  <button
    class="add-project"
    type="button"
    @click="addProjectItem">
    <span class="add-project__icon">
      <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img" aria-hidden="true"><path d="M26.79 13H17V3.21h-4V13H3.21v4H13v9.79h4V17h9.79v-4z"/></svg>
    </span>
    <span class="add-project__text">Создать новый сайт</span>
  </button>
</template>

<script>
import { useProjectsStore } from '@/stores/modules/projects'

export default {
  computed: {
    projects() {
      return useProjectsStore().projects;
    },
  },
  methods: {
    addProjectItem() {
      useProjectsStore().addProject()
    }
  }
}
</script>