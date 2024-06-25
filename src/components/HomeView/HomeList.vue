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
        @delProjectItem="delProjectItem" />
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
  data() {
    return { }
  },
  props: ['projects'],
  components: {
    HomeItem
  },
  methods: {
    delProjectItem(id) {
      this.$emit('delProjectItem', id)
    }
  }
}
</script>