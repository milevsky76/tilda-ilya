<template>
  <div @mousedown.stop class="popup-setting">
    <div class="popup-setting__head">
      <div class="popup-setting__head-top">
        <div class="popup-setting__title">Настройки страницы</div>
        <div 
          @click="closePopup"
          class="popup-setting__close"></div>
      </div>

      <div class="popup-setting__menu-wrapper">
        <ul class="popup-setting__menu">
          <li
            :class="{'popup-setting__item': true, 'popup-setting__item--active': activeTab === 'main' }">
            <button
              @click="activeTab = 'main'">
                Главное
            </button>
          </li>
          
          <li 
            :class="{'popup-setting__item': true, 'popup-setting__item--active': activeTab === 'badge' }">
            <button
              @click="activeTab = 'badge'">
                Бейджик
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="popup-setting__middle">
      <div class="popup-setting__middle-wrapper">
        <div v-show="activeTab === 'main'">
          <div class="popup-setting__group">
            <label class="popup-setting__group-title" for="modalInputTitle">Заголовок</label>
            <div ref="titleError" class="popup-setting__error-message">Заполните поле</div>
            <input
              v-model="editedPage.title"
              class="popup-setting__input"
              id="modalInputTitle"
              type="text"
              name="title"
              placeholder="Заголовок страницы">
          </div>

          <div class="popup-setting__group">
            <label class="popup-setting__group-title" for="modalInputDescr">Описание</label>
            <div ref="descrError" class="popup-setting__error-message">Заполните поле</div>
            <input
              v-model="editedPage.descr"
              class="popup-setting__input"
              id="modalInputDescr"
              type="text"
              name="descr"
              placeholder="Описание страницы">
          </div>
            
          <div class="popup-setting__group">
            <label class="popup-setting__group-title" for="modalInputAddress">Адрес</label>
            <div ref="addressError" class="popup-setting__error-message">Заполните поле</div>
            <input
              v-model="editedPage.address"
              class="popup-setting__input"
              id="modalInputAddress"
              type="text"
              name="address"
              placeholder="Адрес страницы">
          </div>
        </div>

        <div v-show="activeTab === 'badge'">
          <img v-show="editedPage.image" :src="editedPage.image" alt="Selected Image" style="width: 200px; height: 133px;">
          <!-- <input type="hidden" v-model="editedPage.image"> -->
          <div
            v-if="images.length === 0 && isSearch"
            class="popup-setting__error-message">
              Ничего не найдено
          </div>
          <input
            v-model="searchQuery"
            class="popup-setting__input"
            id=""
            type="text"
            name="descr"
            value=""
            placeholder="Бейджик">

          <button
            @click="getImages"
            class="popup-setting__find-white"
            type="button">
              Найти
          </button>
          <div class="popup-setting__images">
            <div 
              v-for="image in images"
              :key="image.blur_hash"
              class="popup-setting__image-wrap">
                <img
                  :src="image.urls.thumb"
                  @click="selectImage(image.urls.thumb)"
                  alt="">
            </div>
          </div>
        </div>

        <div class="popup-setting__bottoms">
          <button
            @click="closePopup"
            class="popup-setting__btn-white"
            type="button">
              Закрыть
          </button>

          <button
            @click="saveChanges"
            class="popup-setting__popup-btn"
            type="button">
              Сохранить изменения
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchImages } from '@/api/unsplash/unsplash.js'

export default {
  data() {
    return {
      activeTab: 'main',
      editedPage: {},
      searchQuery: '',
      isSearch: false,
      images: []
    };
  },
  props: {
    page: Object
  },
  watch: {
    page: {
      handler(newVal) {
        this.editedPage = { ...newVal };
      },
      immediate: true
    }
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    saveChanges() {
      if (this.validateForm()) {
        console.log(this.editedPage)
        this.$emit('save', this.editedPage);
      }
    },
    selectImage(src) {
      console.log(src)
      this.editedPage.image = src;
    },
    validateForm() {
      let valid = true;
      
      if (this.editedPage.title === '') {
        valid = false;
      }
      this.$refs.titleError.style.display = this.editedPage.title === '' ? 'block' : 'none';

      if (this.editedPage.descr === '') {
        valid = false;
      }
      this.$refs.descrError.style.display = this.editedPage.descr === '' ? 'block' : 'none';

      // if (this.editedPage.address === '') {
      //   valid = false;
      // }
      // this.$refs.addressError.style.display = this.editedPage.address === '' ? 'block' : 'none';
      
      return valid;
    },
    async getImages() {
      this.images = await fetchImages(this.searchQuery)
      this.isSearch = true
    }
  }
}
</script>