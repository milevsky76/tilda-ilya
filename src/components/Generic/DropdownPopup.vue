<template>
  <div class="dropdown" ref="dropdownItem" @click="toggleDropdown">
    <button class="td-sites-grid__more td-sites-grid__more_visible"></button>
    <div v-if="isOpen" class="dropdown-menu">
      <button @click.stop="closeDropdown">Закрыть</button>
      <button
        @click.stop="renameItem"
      >Переименовать</button>
      <button
        @click.stop="deleteItem"
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
    renameItem() {
      this.closeDropdown();
    },
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

<style scoped>
.td-sites-grid__more {
  display: none;
  position: absolute;
  right: 6px;
  top: 20px;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EArtboard%3C/title%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Artboard' fill='%23000000' fill-rule='nonzero'%3E%3Cpath d='M11.75,18 C12.7164983,18 13.5,18.7835017 13.5,19.75 C13.5,20.7164983 12.7164983,21.5 11.75,21.5 C10.7835017,21.5 10,20.7164983 10,19.75 C10,18.7835017 10.7835017,18 11.75,18 Z M11.75,10.5 C12.7164983,10.5 13.5,11.2835017 13.5,12.25 C13.5,13.2164983 12.7164983,14 11.75,14 C10.7835017,14 10,13.2164983 10,12.25 C10,11.2835017 10.7835017,10.5 11.75,10.5 Z M11.75,3 C12.7164983,3 13.5,3.78350169 13.5,4.75 C13.5,5.71649831 12.7164983,6.5 11.75,6.5 C10.7835017,6.5 10,5.71649831 10,4.75 C10,3.78350169 10.7835017,3 11.75,3 Z' id='Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  outline: none;
  cursor: pointer;
  z-index: 2;
  opacity: .3;
}

.td-sites-grid__more:hover {
    opacity: 1;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EArtboard%3C/title%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Artboard' fill='%23fa886e' fill-rule='nonzero'%3E%3Cpath d='M11.75,18 C12.7164983,18 13.5,18.7835017 13.5,19.75 C13.5,20.7164983 12.7164983,21.5 11.75,21.5 C10.7835017,21.5 10,20.7164983 10,19.75 C10,18.7835017 10.7835017,18 11.75,18 Z M11.75,10.5 C12.7164983,10.5 13.5,11.2835017 13.5,12.25 C13.5,13.2164983 12.7164983,14 11.75,14 C10.7835017,14 10,13.2164983 10,12.25 C10,11.2835017 10.7835017,10.5 11.75,10.5 Z M11.75,3 C12.7164983,3 13.5,3.78350169 13.5,4.75 C13.5,5.71649831 12.7164983,6.5 11.75,6.5 C10.7835017,6.5 10,5.71649831 10,4.75 C10,3.78350169 10.7835017,3 11.75,3 Z' id='Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.td-sites-grid__more_visible {
    display: block;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  flex-direction: column;
  background-color: #f9f9f9;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1000;
}

.dropdown-menu button {
  width: 100%;
  padding: 10px;
  text-align: left;
  border: none;
  background-color: inherit;
  cursor: pointer;
}

.dropdown-menu button:hover {
  background-color: #ddd;
}

.dropdown-menu.show {
  display: block;
}
</style>
