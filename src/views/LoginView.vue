<template>
  <div class="login-view">
    <div class="login-view__form-wrapper">
      <a class="login-view__logo" href="javascript:void(0);">
        <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img" aria-hidden="true"><path d="M37 31.1v24.37h-4.77V29.4ZM18.66 28.95c-.17-6.33 3.17-9.61 7.52-9.61 2.66 0 4.69.85 9 2.88 3.17 1.53 5.48 2.66 7.86 2.66s3.34-1.87 3.39-5.32h3.79c.34 7.07-3.28 9.61-7.24 9.61-2.54 0-4.81-.74-9.16-2.77-3-1.47-5.32-2.77-7.58-2.77s-3.68 1.58-3.73 5.43h-3.85Z"></path><path d="M35 70a35 35 0 1 1 35-35 35 35 0 0 1-35 35Zm0-67.74A32.74 32.74 0 1 0 67.74 35 32.78 32.78 0 0 0 35 2.26Z"></path></svg>
      </a>
      <form
        class="login-view__form"
        @submit.prevent="login">
        <div class="login-view__group">
          <label class="login-view__group-label" for="inputEmail">Эл. почта</label>
          <div
            v-show="messageEmailError !== ''"
            class="login-view__error-message">
              {{ messageEmailError }}
          </div>
          <input
            v-model="email"
            class="login-view__input"
            id="inputEmail"
            type="email"
            name="email"
            required>
        </div>

        <div class="login-view__group">
          <label class="login-view__group-label" for="inputPassword">Пароль</label>
          <div
            v-show="messagePasswordError !== ''"
            class="login-view__error-message">
              {{ messagePasswordError }}
          </div>
          <input
            v-model="password"
            class="login-view__input"
            id="inputPassword"
            type="password"
            name="password"
            required>
        </div>

        <button
          class="login-view__submit"
          type="submit">
            Войти
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/modules/auth'
import CryptoJS from 'crypto-js'

export default {
  data() {
    return {
      email: '',
      messageEmailError: '',
      password: '',
      messagePasswordError: '',
    };
  },
  methods: {
    login() {
      const salt = useAuthStore().salt;
      const hashedPassword = useAuthStore().hashedPassword;

      if (!this.isValidEmail(this.email)) {
        this.messageEmailError = 'Введите корректный email';
        return;
      }
      this.messageEmailError = '';

      if (!this.isValidPassword(salt, this.password, hashedPassword)) {
        this.messagePasswordError = 'Введите корректный пароль';
        return;
      }
      this.messagePasswordError = '';

      useAuthStore().login();
      this.$router.push('/');
    },
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    isValidPassword(salt, inputPassword, storedHashedPassword) {
      const inputHashedPassword = this.generateMD5Hash(salt, inputPassword);
      return inputHashedPassword === storedHashedPassword;
    },
    generateMD5Hash(salt, password) {
      const saltedPassword = salt + password;
      return CryptoJS.MD5(saltedPassword).toString()
    },
  }
};
</script>