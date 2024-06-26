<template>
  <div v-if="isOpen" class="backdrop" @click="close">
    <div class="popup" @click.stop>
      <!-- <button @click="close" type="button">Закрыть</button> -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: {
    ok: null,
    close: null
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>