<template>
  <header class="header-page">
    <nav class="header-page__nav">
      <div class="header-page__breadcrumbs breadcrumbs">
        <div class="breadcrumbs__item-wrapper">
          <span class="breadcrumbs__item-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M5.83333 9.91667H9.16667V14.5H12.9167L13 7.5H14H15L7.5 0L0 7.5H2.08333V14.5H5.83333V9.91667Z"
                fill="black"
              ></path>
            </svg>
          </span>
          <RouterLink :to="'/'" class="breadcrumbs__link"> Мои сайты </RouterLink>
        </div>

        <div class="breadcrumbs__item-wrapper">
          <RouterLink :to="`/project/${project.id}`" class="breadcrumbs__link">
            {{ project.title }}
          </RouterLink>
        </div>

        <div class="breadcrumbs__item-wrapper">
          <a class="breadcrumbs__link">{{ page.title }}</a>
        </div>
      </div>

      <div class="header-page__nav-right">
        <div class="header-page__link-wrapper">
          <button v-show="hasHistory" class="header-page__link" @click="rollBackHistory">
            Отменить
          </button>
          <RouterLink
            :to="`/project/${project.id}/page/${page.id}/preview`"
            class="header-page__link"
          >
            Предпросмотр
          </RouterLink>
        </div>

        <div class="header-page__link-wrapper">
          <button
            class="header-page__link breadcrumbs__link--toggle"
            @click.stop="isOpenDrop = !isOpenDrop"
          >
            Ещё
          </button>
          <div v-show="isOpenDrop" ref="dropdown" class="header-page__dropmenu">
            <button class="header-page__dropmenu-item" type="button" @click="isPopupOpen = true">
              Настройки сайта
            </button>

            <Popup :isOpen="isPopupOpen" @close="isPopupOpen = false">
              <PopupSetting :page="page" @closePopup="isPopupOpen = false" @save="savePage" />
            </Popup>

            <RouterLink :to="`/`" class="header-page__dropmenu-item"> Мои сайты </RouterLink>

            <RouterLink :to="`/profile`" class="header-page__dropmenu-item"> Профиль </RouterLink>

            <a
              v-if="isAuthenticated"
              href="#"
              class="header-page__dropmenu-item"
              @click.prevent="logout"
            >
              Выйти
            </a>
            <RouterLink v-else :to="'/login'" class="header-page__dropmenu-item">
              Войти
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
import { useAuthStore } from '@/stores/modules/auth';
import { mapState, mapActions } from 'pinia';
import { usePageBlocksStore } from '@/stores/modules/blocks';

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
      required: true
    },
    pageId: {
      type: String,
      required: true
    }
  },
  components: {
    Popup,
    PopupSetting
  },
  methods: {
    ...mapActions(usePageBlocksStore, ['rollBack']),
    handleClickOutside(event) {
      const refDropdown = this.$refs.dropdown;

      if (this.isOpenDrop && !refDropdown?.contains(event.target)) {
        this.isOpenDrop = false;
      }
    },
    savePage(updatedPage) {
      usePagesStore().savePage(updatedPage);
      this.isPopupOpen = false;
    },
    logout() {
      useAuthStore().logout();
      this.$router.push('/logout');
    },
    rollBackHistory() {
      this.rollBack();
    }
  },
  computed: {
    ...mapState(usePageBlocksStore, ['hasHistory']),
    page() {
      return usePagesStore().getPageById(+this.pageId);
    },
    project() {
      return useProjectsStore().getProjectById(+this.id);
    },
    isAuthenticated() {
      return useAuthStore().isAuthenticated;
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  }
};
</script>
