<template>
  <div class="dropdown" ref="dropdownItem" @click="toggleDropdown">
    <button
      class="dropdown__more"
      @click.prevent=""
    ></button>
    <div v-if="isOpen" class="dropdown__menu">
      <button
        type="button"
        @click.stop.prevent="closeDropdown"
      >Закрыть</button>

      <button
        type="button"
        @click.prevent=""
      >Переименовать</button>

      <button
        type="button"
        @click.stop.prevent="deleteItem"
      >Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenLocal: false
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
        // Добавляем обработчик клика на документ
        document.addEventListener('click', this.handleClickOutside);
      } else {
        // Удаляем обработчик клика с документа
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
    deleteItem(index) {
      this.closeDropdown();
      this.$emit('delete');
    },
    closeDropdown() {
      this.$emit('toggle');
    },
  },
  beforeUnmount() {
    // Убеждаемся, что обработчик событий очищается перед удалением компонента
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>