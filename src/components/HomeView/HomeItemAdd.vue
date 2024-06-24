<template>
	<div
		class="td-sites-uppanel__rightbtn-table"
		v-on:click="onSubmit"
	>
		<svg width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g><polygon style="fill:#fff;" points="26.79 13 17 13 17 3.21 13 3.21 13 13 3.21 13 3.21 17 13 17 13 26.79 17 26.79 17 17 26.79 17 26.79 13"></polygon></g></svg>
		<span>Создать новый сайт</span>
	</div>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      const newProject = {
				id: Date.now(),
				name: 'My project'
			}

			this.$emit('addProjectItem', newProject)
    }
  }
}
</script>

<style scoped>

</style>