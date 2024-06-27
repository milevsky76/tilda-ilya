<template>
  <li class="pages-list__item">
    <div class="pages-list__wrapper">
      <div class="pages-list__right">
        <RouterLink
          :to="`/project/${page.projectId}/page/${page.id}/edit`"
          class="pages-list__image-block">
            <div class="pages-list__image">
              <img :src="page.image" alt="">
            </div>
        </RouterLink>

        <div class="pages-list__name-block">
          <RouterLink
            :to="`/project/${page.projectId}/page/${page.id}/edit`"
            class="pages-list__name-text">
              <span class="pages-list__page-name">{{ page.title }}</span>
          </RouterLink>

          <div class="pages-list__info">
            <span class="pages-list__info-descr">Описание: {{ page.descr }}</span>
            <span class="pages-list__info-alias">Адрес: {{ page.address }}</span>
          </div>
        </div>
      </div>

      <div class="pages-list__right">
        <button
          class="pages-list__settings"
          @click="isPopupOpen = true">
          <span class="pages-list__page-settings-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="14px"><path d="M25.72 15.27l1.33-1a2.47 2.47 0 00-.75-4.29l-1.6-.51a1.72 1.72 0 01-1.15-2l.37-1.66A2.43 2.43 0 0020.62 3l-1.55.65a1.68 1.68 0 01-2.15-.79l-.77-1.51a2.41 2.41 0 00-4.3 0l-.77 1.51a1.68 1.68 0 01-2.15.79L7.38 3a2.43 2.43 0 00-3.3 2.8l.37 1.66a1.72 1.72 0 01-1.15 2l-1.6.51a2.47 2.47 0 00-.7 4.27l1.33 1a1.73 1.73 0 01.4 2.29L1.78 19a2.45 2.45 0 002.15 3.77l1.67-.08a1.7 1.7 0 011.76 1.49l.22 1.68a2.42 2.42 0 004 1.49l1.23-1.15a1.68 1.68 0 012.29 0l1.23 1.15a2.42 2.42 0 004-1.49l.22-1.68a1.7 1.7 0 011.76-1.49l1.67.08A2.45 2.45 0 0026.22 19l-.9-1.43a1.73 1.73 0 01.4-2.3zM14 20.77A6.77 6.77 0 1120.77 14 6.77 6.77 0 0114 20.77z"></path></svg>
          </span>
          <span class="pages-list__page-settings-text">Настройки</span>
        </button>

        <Popup
          :isOpen="isPopupOpen"
          @close="isPopupOpen = false">
            <PopupSetting
              :page="page"
              @closePopup="isPopupOpen = false"
              @save="savePage"/>
        </Popup>

        <ProjectItemRemove @remove="removePage(page.id)" />
      </div>
    </div>
  </li>
</template>

<script>
import { usePagesStore } from '@/stores/modules/pages';

import ProjectItemRemove from '@/components/ProjectView/ProjectItemRemove.vue'

import Popup from '@/components/Generic/Popup.vue'
import PopupSetting from '@/components/Generic/PopupSetting.vue'

export default {
  data() {
    return {
      isPopupOpen: false,
    };
  },
  props: {
    page: {
      type: Object,
      require: true
    }
  },
  components: {
    ProjectItemRemove, Popup, PopupSetting
  },
  methods: {
    removePage(id) {
      usePagesStore().removePage(id)
    },
    savePage(updatedPage) {
      usePagesStore().savePage(updatedPage)
      this.isPopupOpen = false
    }
  }
}
</script>