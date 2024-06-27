<template>
  <!-- <component :is="headerComponent"></component> -->
  <HeaderApp/>
  <RouterView />
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue'
// import HeaderPage from '@/components/HeaderPage.vue'

export default {
  name: 'App',
  components: {
    HeaderApp
  },
  // computed: {
  //   headerComponent() {
  //     return this.$route.meta.header || 'HeaderApp';
  //   }
  // }
}
</script>