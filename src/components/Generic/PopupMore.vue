<template>
  <div
    v-if="isOpen"
    ref="dropdown"
    class="dropdown__menu">
      <button type="button">Настройки сайта</button>
      <button type="button">Мои сайты</button>
      <button type="button">Профиль</button>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: {
    ok: null,
    close: null
  },
  methods: {
    close() {
      this.$emit('close')
    },
    handleClickOutside(event) {
      const refDropdown = this.$refs.dropdown;
      if (this.isOpen && !refDropdown?.contains(event.target)) {
        this.close()
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  }
};
</script>