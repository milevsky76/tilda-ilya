import { defineStore } from 'pinia'
import CryptoJS from 'crypto-js'

export const useAuthStore  = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: false, // Предполагаем, что изначально пользователь не аутентифицирован
    salt: 'd41d8cd98f', // Соль для пароля
    hashedPassword: '88fabb72d00ea5ba8c39c1a64a3db19e', // Hash пароля 'Я_обожаю_стажировку_в_E2!'
    limitToken: 15 * 60 * 1000
  }),
  getters: {
    getToken: state => () => {
      return state.token;
    }
  },
  actions: {
    login() {
      const token = this.generateToken()
      const tokenInitTime = this.generateTokenInitTime()

      localStorage.setItem('token', token)
      localStorage.setItem('tokenInitTime', tokenInitTime)

      this.isAuthenticated = true
    },
    logout() {
      this.isAuthenticated = false
    },
    generateToken() {
      const bytes = CryptoJS.lib.WordArray.random(48);
      const base64url = CryptoJS.enc.Base64.stringify(bytes)

      return base64url;
    },
    generateTokenInitTime() {
      return Date.now() + '';
    },
    isTokenValid() {
      const tokenInitTime = localStorage.getItem('tokenInitTime')
      const token = localStorage.getItem('token')

      if (!tokenInitTime || !token) {
        localStorage.removeItem('tokenInitTime')
        localStorage.removeItem('token')

        return false;
      }

      const currentTime = Date.now();

      if (currentTime - tokenInitTime > this.limitToken) {
        localStorage.removeItem('tokenInitTime')
        localStorage.removeItem('token')

        return false;
      } 

      return true;
    },
  }
})