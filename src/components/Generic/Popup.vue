<template>
  <div
    v-if="isOpen"
    :class="['backdrop', { 'show': isOpen }]">
    <div
      class="popup"
      @mousedown="close">
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