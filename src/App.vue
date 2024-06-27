<template>
  <component
    v-if="headerType && headerType.component !== null"
    :is="headerType.component"
    :="headerType.props" />
  <RouterView />
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue'
import HeaderPage from '@/components/HeaderPage.vue'

export default {
  name: 'App',
  components: {
    HeaderApp, HeaderPage
  },
  computed: {
    headerType() {
      const route = this.$route;
      const header = route.meta && route.meta.header;

      if (header === null) {
        return null;
      } else if (header === 'HeaderPage') {
        return {
          component: header,
          props: route.params
        };
      } else {
        return { component: 'HeaderApp' };
      }
    }
  }
}
</script>