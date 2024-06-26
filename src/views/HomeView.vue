<template>
  <div class="home-panel">
    <div class="home-panel__wrapper">
      <div class="home-panel__title">Мои проекты:</div>
      <div class="home-panel__right-side">
        <HomeItemAdd />
      </div>
    </div>
  </div>

  <HomeList />
</template>

<script>
import HomeList from '@/components/HomeView/HomeList.vue'
import HomeItemAdd from '@/components/HomeView/HomeItemAdd.vue'

export default {
  name: 'Home',
  components: {
    HomeList, HomeItemAdd
  }
}
</script>