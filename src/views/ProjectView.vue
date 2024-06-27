<template>
  <div class="project-view">
    <div class="project-view__panel-wrapper">
      <div class="project-view__panel">
        <div class="project-view__panel-top">
          <button
            @click="isPopupOpen = true"
            class="project-view__link">
            <span class="project-view__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="currentColor" role="img" aria-hidden="true"><path d="M28 14c0-7.7-6.3-14-14-14S0 6.3 0 14c0 7.5 5.9 13.7 13.5 14h1C22 27.7 28 21.5 28 14zM14 25.9c-1.4-1.3-2.4-3-2.9-4.9H17c-.6 1.8-1.6 3.5-3 4.9zM10.5 19c-.3-1.3-.4-2.7-.5-4h7.9c0 1.3-.2 2.7-.5 4h-6.9zm-8.4-4h6c0 1.3.2 2.7.4 4H3.1c-.5-1.3-.9-2.6-1-4zM14 2.3c1.4 1.3 2.4 2.9 2.9 4.7h-5.8c.5-1.8 1.5-3.4 2.9-4.7zM17.5 9c.3 1.3.4 2.7.5 4h-7.9c0-1.3.2-2.7.5-4h6.9zm8.4 4h-6c0-1.3-.2-2.7-.4-4h5.4c.5 1.3.9 2.6 1 4zM8.1 13h-6c.1-1.4.5-2.7 1.1-4h5.3c-.3 1.3-.4 2.7-.4 4zm11.8 2h6c-.1 1.4-.5 2.7-1.1 4h-5.3c.3-1.3.4-2.7.4-4zm3.8-8H19c-.5-1.7-1.2-3.2-2.2-4.6C19.6 3 22 4.7 23.7 7zM11.2 2.4c-1 1.4-1.7 3-2.2 4.6H4.3C6 4.7 8.4 3 11.2 2.4zM4.3 21H9c.5 1.6 1.2 3.2 2.2 4.6-2.8-.7-5.2-2.3-6.9-4.6zm12.6 4.6c1-1.4 1.7-3 2.1-4.6h4.7c-1.7 2.3-4.1 3.9-6.8 4.6z"></path></svg>
            </span>
            <span class="project-view__text">Подключить домен</span>
          </button>
          <Popup
            :isOpen="isPopupOpen"
            @close="isPopupOpen = false">
              <PopupDomain
                @closePopup="isPopupOpen = false"
                @save="handleSaveDomain"/>
          </Popup>

          <div class="project-view__url-block">
            <span class="project-view__url-block-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M22 23.1H4.9V6h9.5V3H1.9v23.1H25V13.6h-3z"></path><path d="M18 0v3h4.9L9.1 16.8l2.1 2.1L25 5.1V10h3V0z"></path></svg>
            </span>
            <div class="project-view__url-block-link">
              <span class="project-view__url-text">Адрес сайта: </span>
              <span class="project-view__url-link">
                <RouterLink :to="`/project/${id}/preview`">/project/{{ id }}/preview</RouterLink>
              </span>
            </div>
          </div>
        </div>

        <div class="project-view__panel-bottom">
          <div class="project-view__project-name">{{ project.title }}</div>

          <ProjectItemAdd @add="addPage(+id)"/>
        </div>
      </div>
    </div>

    <div class="project-view__pages-list">
      <div class="project-view__pages-list-title">Страницы сайта:</div>

      <ProjectList :pages="pages"/>
    </div>
  </div>
</template>

<script>
import { useProjectsStore } from '@/stores/modules/projects';
import { usePagesStore } from '@/stores/modules/pages';

import ProjectList from '@/components/ProjectView/ProjectList.vue'
import ProjectItemAdd from '@/components/ProjectView/ProjectItemAdd.vue'

import Popup from '@/components/Generic/Popup.vue'
import PopupDomain from '@/components/Generic/PopupDomain.vue'

export default {
  data() {
    return {
      isPopupOpen: false,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  components: {
    ProjectList, ProjectItemAdd, Popup, PopupDomain
  },
  methods: {
    addPage(projectId) {
      usePagesStore().addPage(projectId);
    },
    handleSaveDomain(domainName) {
      console.log(domainName)
      this.isPopupOpen = false
    }
  },
  computed: {
    project() {
      return useProjectsStore().getProjectById(+this.id);
    },
    pages() {
      return usePagesStore().getPagesByProjectId(this.project.id);
    },
  },
};
</script>