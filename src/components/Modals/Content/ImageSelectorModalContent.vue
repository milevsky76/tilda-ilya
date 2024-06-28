<template>
  <div class="image-selector">
    <div class="modal__title">Выбор изображения</div>
    <div class="modal__content">
      <div>
        <img
          v-show="selectedImageSrc"
          :src="selectedImageSrc"
          class="popup-setting__current-image"
          alt=""
        />
        <div v-if="images.length === 0 && isSearch" class="popup-setting__error-message">
          Ничего не найдено
        </div>
        <input
          v-model="searchQuery"
          class="popup-setting__input"
          id=""
          type="text"
          name="descr"
          value=""
          placeholder="Бейджик"
        />

        <button class="popup-setting__find-white" type="button" @click="getImages">Найти</button>
        <div class="popup-setting__images">
          <div v-for="image in images" :key="image.blur_hash" class="popup-setting__image-wrap">
            <img :src="image.urls.thumb" alt="" @click="setImage(image.urls.thumb)" />
          </div>
        </div>
      </div>
    </div>
    <div class="modal__actions">
      <button class="button button--filled button--rounded" @click="selectImage">Сохранить</button>
    </div>
  </div>
</template>

<script>
import { useModalStore } from '@/stores/modules/modal';
import { mapActions, mapState } from 'pinia';
import { fetchImages } from '@/api/unsplash/unsplash.js';

export default {
  computed: {
    ...mapState(useModalStore, ['selectedImageSrc'])
  },
  data() {
    return {
      searchQuery: '',
      isSearch: false,
      images: [],
      selectedImageSrc: ''
    };
  },
  methods: {
    ...mapActions(useModalStore, ['close', 'setSelectedImageSrc']),
    selectImage() {
      this.close();
    },
    setImage(src) {
      this.selectedSrc = src;
      this.setSelectedImageSrc(this.selectedSrc);
    },
    removeImage() {
      this.selectedSrc = '';
    },
    async getImages() {
      this.images = await fetchImages(this.searchQuery);
      this.isSearch = true;
    }
  },
  mounted() {
    this.selectedImageSrc = this.selectedImageSrc;
  }
};
</script>
