<template>
  <button
    class="add-project"
    type="button"
    @click="addProjectItem"
  >
    <span class="add-project__icon"><IconPlus /></span>
    <span class="add-project__text">Создать новый сайт</span>
  </button>
</template>

<script>
import IconPlus from '@/components/icons/IconPlus.vue'

export default {
  components: {
    IconPlus
  },
  methods: {
    addProjectItem() {
      this.$emit('addProjectItem', {
        id: Date.now(),
        name: 'My project'
      })
    }
  }
}
</script>