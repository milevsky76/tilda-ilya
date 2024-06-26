<template>
  <div class="dropdown" ref="dropdownItem">
    <button
      @click.stop.prevent="openPopup"
      class="dropdown__more">
    </button>
    <div
      v-if="isOpen"
      class="dropdown__menu">
      <button
        @click.stop.prevent="closePopup"
        type="button">
        Закрыть
      </button>

      <button
        @click.stop.prevent
        type="button">
        Переименовать
      </button>

      <button
        @click.stop.prevent="this.$emit('remove')"
        type="button">
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
    openPopup(event) {
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
      if (this.$refs.dropdownItem && !this.$refs.dropdownItem.contains(event.target)) {
        this.closePopup()
        // this.isOpenLocal = false;
        // document.removeEventListener('click', this.handleClickOutside);
        // this.$emit('toggle');
      }
    },
    renameItem() {}
  },
  beforeUnmount() {
    // Убеждаемся, что обработчик событий очищается перед удалением компонента
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>