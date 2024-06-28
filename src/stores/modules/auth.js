import {
  defineStore
} from 'pinia';
import CryptoJS from 'crypto-js';

const defaultState = {
  isAuthenticated: false, // Предполагаем, что изначально пользователь не аутентифицирован
  salt: 'd41d8cd98f', // Соль для пароля
  hashedPassword: '88fabb72d00ea5ba8c39c1a64a3db19e', // Hash пароля 'Я_обожаю_стажировку_в_E2!'
  limitToken: 15 * 60 * 1000
};

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    const storedState = localStorage.getItem('authState');
    let authState = null;

    if (storedState) {
      authState = JSON.parse(storedState);
    } else {
      localStorage.setItem('authState', JSON.stringify(defaultState));
      authState = defaultState;
    }

    return authState;
  },
  getters: {
    getToken: state => () => {
      return state.token;
    }
  },
  actions: {
    saveState() {
      localStorage.setItem('authState', JSON.stringify(this.$state));
    },
    login() {
      const token = this.generateToken();
      const tokenInitTime = this.generateTokenInitTime();

      localStorage.setItem('token', token);
      localStorage.setItem('tokenInitTime', tokenInitTime);

      this.isAuthenticated = true;

      this.saveState();
    },
    logout() {
      this.isAuthenticated = false;

      this.saveState();
    },
    generateToken() {
      const bytes = CryptoJS.lib.WordArray.random(48);
      const base64url = CryptoJS.enc.Base64.stringify(bytes);

      return base64url;
    },
    generateTokenInitTime() {
      return Date.now() + '';
    },
    isTokenValid() {
      const tokenInitTime = localStorage.getItem('tokenInitTime');
      const token = localStorage.getItem('token');

      if (!tokenInitTime || !token) {
        localStorage.removeItem('tokenInitTime');
        localStorage.removeItem('token');

        this.logout();

        return false;
      }

      const currentTime = Date.now();

      if (currentTime - tokenInitTime > this.limitToken) {
        localStorage.removeItem('tokenInitTime');
        localStorage.removeItem('token');

        this.logout();

        return false;
      }

      return true;
    }
  }
});