<template>
  <div class="project">
    <ul
      class="project__list"
      v-if="projects.length !== 0">
      <HomeItem
        v-for="(project, i) of projects"
        :project="project"
        :index="i"
        :key="project.id"
        @toggle="toggleDropdown(index)"
        @deleteItem="handleDeleteItem"
      />
      <li>
        <div></div>
      </li>
    </ul>
    <h3
      class="project__empty-text"
      v-show="projects.length === 0"
    >Проектов нет</h3>
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
    toggleDropdown(index) {
      this.projects.forEach((project, idx) => {
        console.log(project, idx);
        if (idx !== index) {
          this.$set(project, 'isOpen', false);
        }
      });
    },
    handleDeleteItem(itemId) {
      this.projects.splice(itemId, 1);
    }
  }
}
</script>