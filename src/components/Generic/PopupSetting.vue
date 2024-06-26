<template>
  <div class="popup-setting">
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
        <div v-if="activeTab === 'main'">
          <div class="popup-setting__group">
            <label class="popup-setting__group-title" for="modalInputTitle">Заголовок</label>
            <input
              v-model="modalInputTitle"
              class="popup-setting__input"
              id="modalInputTitle"
              type="text"
              name="title"
              placeholder="Заголовок страницы">
              <!-- :value="page.name + ' ' + index" -->
          </div>
          
          <div class="popup-setting__group">
            <label class="popup-setting__group-title" for="modalInputDescr">Описание</label>
            <input
              v-model="modalInputDescr"
              class="popup-setting__input"
              id="modalInputDescr"
              type="text"
              name="descr"
              placeholder="Описание страницы">
          </div>
            
          <div class="popup-setting__group">
            <label class="popup-setting__group-title" for="modalInputAlias">Адрес</label>
            <input
              v-model="modalInputAlias"
              class="popup-setting__input"
              id="modalInputAlias"
              type="text"
              name="alias"
              placeholder="Адрес страницы">
          </div>
        </div>

        <div v-if="activeTab === 'badge'">
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
          <button class="popup-setting__popup-btn" type="button">Сохранить изменения</button>
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
      modalInputTitle: '',
      modalInputDescr: '',
      modalInputAlias: '',
      searchQuery: '',
      isSearch: false,
      images: []
    };
  },
  props: {
    page: Object,
    index: Number,
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    async getImages() {
      this.images = await fetchImages(this.searchQuery)
      this.isSearch = true
    }
  }
}
</script>