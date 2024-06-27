<template>
  <div v-if="isOpen" class="backdrop" @mousedown="close">
    <div class="popup" @mousedown.stop>
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
    close(event) {
      this.$emit('close')
    }
  }
}
</script>