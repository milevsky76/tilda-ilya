<template>
  <ul v-if="projects.length !== 0">
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
  <h3 v-show="projects.length === 0">Проектов нет</h3>
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

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  margin: 10px auto 0;
  max-width: 1160px;
  display: grid;
  padding-bottom: 50px;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 40px;
}

li {
  width: 100%;
  height: 265px;
  box-sizing: border-box;
}

li div{
  box-sizing: border-box;
  width: 100%;
  height: 265px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  transition: background-color 200ms ease-in-out;
  position: relative;
}

li:last-child div {
  border: 1px dashed #ccc;
  background-color: transparent;
}

</style>