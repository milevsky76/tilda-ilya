<template>
  <li class="project-item">
    <RouterLink
      :to="`/project/${project.id}`"
      class="project-item__wrapper">
      <div class="project-item__header">
        <div class="project-item__title">{{ project.title }}</div>

        <PopupDropdown @remove="removeProject(project.id)" />
      </div>

      <div class="project-item__hr"></div>

      <div class="project-item__controls controls">
        <a
          class="controls__link controls__link--big"
          @click.stop.prevent>
          <span class="controls__icon">
            <svg width="12" height="12" viewBox="0 0 28.21 28" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img" aria-hidden="true"><path d="m22.808-.004 5.395 5.396-2.567 2.566-5.395-5.395zM18.957 3.849l5.396 5.395-12.856 12.855-5.395-5.395zM0 28l4.45-9.64 5.4 5.4L0 28z"></path></svg>
          </span>
          <span class="controls__text">Редактировать сайт</span>
        </a>
        
        <RouterLink
          :to="`/project/${project.id}/preview`"
          class="controls__link"
          @click.stop>
            <span class="controls__icon">
              <svg width="12" height="12" viewBox="0 0 26.14 26.14" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img" aria-hidden="true"><path d="M20.14 23.14H3V6h9.57V3H0v23.14h23.14V13.57h-3v9.57z"></path><path d="M16.14 0v3h4.88L7.24 16.78l2.12 2.12L23.14 5.12V10h3V0h-10z"></path></svg>
            </span>
            <span class="controls__text">/project/{{ project.id }}/preview</span>
        </RouterLink>
      </div>
    </RouterLink>
  </li>
</template>

<script>
import { useProjectsStore } from '@/stores/modules/projects'

import PopupDropdown from '@/components/Generic/PopupDropdown.vue'

export default {
  props: {
    project: {
      type: Object,
      require: true
    }
  },
  components: {
    PopupDropdown
  },
  methods: {
    removeProject(id) {
      useProjectsStore().removeProject(id)
    },
  }
}
</script>