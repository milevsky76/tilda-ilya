<template>
  <li class="project-item">
    <router-link
      class="project-item__wrapper"
      :to="`/project/${index}`"
    >
      <div class="project-item__header">
        <div class="project-item__title">
          {{ project.name + ' ' + index }}
        </div>

        <DropdownPopup
          :isOpen="isOpen"
          :index="index"
          @toggle="toggleDropdown"
          @delete="handleDelete"
        />
      </div>

      <div class="project-item__hr"></div>

      <div class="project-item__controls controls">
        <a
          class="controls__link controls__link--big"
          @click.stop.prevent=""
        >
          <span class="controls__icon"><IconPencil /></span>
          <span class="controls__text">Редактировать сайт</span>
        </a>
        
        <a class="controls__link" href="javascript:void(0);">
          <span class="controls__icon"><IconArrowLink /></span>
          <span class="controls__text">
            <router-link :to="`/project/${index}/preview`">/project/{{ index }}/preview</router-link>
          </span>
        </a>
      </div>
    </router-link>
  </li>
</template>

<script>
import DropdownPopup from '@/components/Generic/DropdownPopup.vue'
import IconPencil from '@/components/icons/IconPencil.vue'
import IconArrowLink from '@/components/icons/IconArrowLink.vue'

export default {
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    project: {
      type: Object,
      require: true
    },
    index: Number
  },
  components: {
    DropdownPopup, IconPencil, IconArrowLink
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    handleDelete() {
      this.$emit('deleteItem', this.index);
    },
  },
}
</script>