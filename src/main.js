import './assets/scss/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
// import { vueVimeoPlayer } from 'vue-vimeo-player';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(vueVimeoPlayer);

app.mount('#app');
