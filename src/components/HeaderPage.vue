<template>
  <header class="header-page">
    <nav class="header-page__nav">
      <div class="header-page__breadcrumbs breadcrumbs">
        <div class="breadcrumbs__item-wrapper">
          <span class="breadcrumbs__item-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M5.83333 9.91667H9.16667V14.5H12.9167L13 7.5H14H15L7.5 0L0 7.5H2.08333V14.5H5.83333V9.91667Z" fill="black"></path></svg>
          </span>
          <RouterLink :to="'/'" class="breadcrumbs__link">Мои сайты</RouterLink>
        </div>

        <div class="breadcrumbs__item-wrapper">
          <RouterLink :to="`/project/${project.id}`" class="breadcrumbs__link">{{ project.title }}</RouterLink>
        </div>

        <div class="breadcrumbs__item-wrapper">
          <a class="breadcrumbs__link">{{ page.title }}</a>
        </div>
      </div>

      <div class="header-page__nav-right">
        <div class="header-page__link-wrapper">
          <RouterLink :to="`/page/${page.id}/preview`" class="header-page__link">Предпросмотр</RouterLink>
        </div>

        <div class="header-page__link-wrapper">
          <button
            @click.stop="isOpenDrop = !isOpenDrop"
            class="header-page__link breadcrumbs__link--toggle">
              Ещё
          </button>
          <div v-show="isOpenDrop" ref="dropdown" class="header-page__dropmenu">
            <button 
              @click="isPopupOpen = true"
              class="header-page__dropmenu-item"
              type="button">
                Настройки сайта
            </button>
            <Popup
              :isOpen="isPopupOpen"
              @close="isPopupOpen = false">
                <PopupSetting
                  :page="page"
                  @closePopup="isPopupOpen = false"
                  @save="savePage"/>
            </Popup>
            
            <RouterLink
              :to="`/`"
              class="header-page__dropmenu-item">
                Мои сайты
            </RouterLink>

            <RouterLink
              :to="`/profile`"
              class="header-page__dropmenu-item">
                Профиль
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useProjectsStore } from '@/stores/modules/projects';
import { usePagesStore } from '@/stores/modules/pages';

import Popup from '@/components/Generic/Popup.vue';
import PopupSetting from '@/components/Generic/PopupSetting.vue';

export default {
  name: 'PageHeader',
  data() {
    return {
      isOpenDrop: false,
      isPopupOpen: false
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  components: {
    Popup, PopupSetting
  },
  methods: {
    handleClickOutside(event) {
      if (this.isOpenDrop && !this.$refs.dropdown.contains(event.target)) {
        this.isOpenDrop = false
      }
    },
    savePage(updatedPage) {
      usePagesStore().savePage(updatedPage)
      this.isPopupOpen = false
    }
  },
  computed: {
    page() {
      return usePagesStore().getPageById(+this.id);
    },
    project() {
      return useProjectsStore().getProjectById(this.page.projectId);
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
};
</script>