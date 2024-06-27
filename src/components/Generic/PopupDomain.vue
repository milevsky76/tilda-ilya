<template>
  <div
    class="popup-setting"
    @mousedown.stop>
    <div class="popup-setting__head">
      <div class="popup-setting__head-top">
        <div class="popup-setting__title">Подключение домена</div>
        <div
          class="popup-setting__close"
          @click="closePopup"></div>
      </div>
    </div>

    <div class="popup-setting__middle">
      <div class="popup-setting__middle-wrapper">
        <div class="popup-setting__group">
          <label class="popup-setting__group-title" for="modalInputDomain">Домен</label>
          <div
            v-show="validationError !== ''"
            class="popup-setting__error-message">
              {{ validationError }}
          </div>
          <input
            v-model="domainName"
            class="popup-setting__input"
            id="modalInputDomain"
            type="text"
            name="domain"
            value=""
            placeholder="Имя домена">
        </div>

        <div class="popup-setting__bottoms">
          <button
            class="popup-setting__btn-white"
            type="button"
            @click="closePopup">
              Закрыть
          </button>
          <button
            class="popup-setting__popup-btn"
            type="button"
            @click="saveDomain">
              Сохранить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      domainName: '',
      validationError: ''
    };
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    saveDomain() {
      if (!this.domainName.trim()) {
        this.validationError = 'Имя домена не может быть пустым';
        return;
      }

      this.$emit('save', this.domainName)
    }
  }
}
</script>