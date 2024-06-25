<template>
  <div class="dropdown" ref="dropdownItem">
    <button
      @click.stop.prevent
      class="dropdown__more">
    </button>
    <div
      v-if="isOpen"
      class="dropdown__menu">
      <button
        @click.stop.prevent
        type="button">
        Закрыть
      </button>

      <button
        @click.stop.prevent
        type="button">
        Переименовать
      </button>

      <button
        @click.stop.prevent="deleteItem"
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
    };
  },
  props: {
    isOpen: Boolean,
  },
  methods: {
    toggleDropdown() {
      this.closeDropdown();

      this.isOpenLocal = !this.isOpenLocal;
      if (this.isOpenLocal) {
        document.addEventListener('click', this.handleClickOutside);
      } else {
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
    handleClickOutside(event) {
      // Проверяем, был ли клик совершен вне dropdown
      if (this.$refs.dropdownItem && !this.$refs.dropdownItem.contains(event.target)) {
        this.isOpenLocal = false;
        document.removeEventListener('click', this.handleClickOutside);
        this.$emit('toggle');
      }
    },
    renameItem() {},
    deleteItem() {
      this.$emit('delete');
    },
    closeDropdown() {
    },
  },
  beforeUnmount() {
    // Убеждаемся, что обработчик событий очищается перед удалением компонента
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>