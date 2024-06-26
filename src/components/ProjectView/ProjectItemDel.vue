<template>
  <button
    @click="delPageItem"
    class="pages-list__page-del"
    type="button">
    <span class="pages-list__page-del-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="14px" height="14px"><g><path d="M16.06 2.89V1.11H12v1.78H4.11v4.19h20.07V2.89zM6.11 26.89h16.07l2-16.81H4.11z"></path></g></svg>
    </span>
    <span class="pages-list__page-del-text">Удалить</span>
  </button>
</template>

<script>
export default {
  methods: {
    delPageItem() {
      this.$emit('delPageItem');
    },
  }
}
</script>