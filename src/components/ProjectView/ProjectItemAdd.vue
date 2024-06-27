<template>
  <button
    class="project-view__new-page"
    type="button"
    @click="this.$emit('add')">
      <span class="project-view__new-page-icon">
        <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img" aria-hidden="true"><path d="M26.79 13H17V3.21h-4V13H3.21v4H13v9.79h4V17h9.79v-4z"></path></svg>
      </span>
      <span class="project-view__new-page-text">Создать новую страницу</span>
  </button>
</template>

<script>
</script>