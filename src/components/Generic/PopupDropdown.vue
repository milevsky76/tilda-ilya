<template>
  <div class="dropdown" ref="dropdownItem">
    <button
      class="dropdown__more"
      @click.prevent="openPopup">
    </button>
    <div
      v-if="isOpen"
      class="dropdown__menu">
      <button
        type="button"
        @click.stop.prevent="closePopup">
          Закрыть
      </button>

      <button
        type="button"
        @click.stop.prevent>
          Переименовать
      </button>

      <button
        type="button"
        @click.stop.prevent="this.$emit('remove')">
          Удалить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  props: { 
    oneIsOpen: Boolean,
    index: Number
  },
  methods: {
    openPopup() {
      this.isOpen = true

      document.addEventListener('click', this.handleClickOutside)
    },
    closePopup() {
      this.isOpen = false

      document.removeEventListener('click', this.handleClickOutside)
    },
    togglePopup() {
      this.isOpen = !this.isOpen

      if (this.isOpen) {
        document.addEventListener('click', this.handleClickOutside)
      } else {
        document.removeEventListener('click', this.handleClickOutside)
      }
    },
    handleClickOutside(event) {
      const refDropdownItem = this.$refs.dropdownItem
      
      if (refDropdownItem && !refDropdownItem?.contains(event.target)) {
        this.closePopup()
      }
    },
    renameItem() {}
  },
  beforeUnmount() {
    // Убеждаемся, что обработчик событий очищается перед удалением компонента
    document.removeEventListener('click', this.handleClickOutside)
  }
};
</script>