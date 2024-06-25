<template>
  <div class="project-view">
    <div class="project-view__panel-wrapper">
      <div class="project-view__panel">
        <div class="project-view__panel-top">
          <a class="project-view__link" href="javascript:void(0);">
            <span class="project-view__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="currentColor" role="img" aria-hidden="true"><path d="M28 14c0-7.7-6.3-14-14-14S0 6.3 0 14c0 7.5 5.9 13.7 13.5 14h1C22 27.7 28 21.5 28 14zM14 25.9c-1.4-1.3-2.4-3-2.9-4.9H17c-.6 1.8-1.6 3.5-3 4.9zM10.5 19c-.3-1.3-.4-2.7-.5-4h7.9c0 1.3-.2 2.7-.5 4h-6.9zm-8.4-4h6c0 1.3.2 2.7.4 4H3.1c-.5-1.3-.9-2.6-1-4zM14 2.3c1.4 1.3 2.4 2.9 2.9 4.7h-5.8c.5-1.8 1.5-3.4 2.9-4.7zM17.5 9c.3 1.3.4 2.7.5 4h-7.9c0-1.3.2-2.7.5-4h6.9zm8.4 4h-6c0-1.3-.2-2.7-.4-4h5.4c.5 1.3.9 2.6 1 4zM8.1 13h-6c.1-1.4.5-2.7 1.1-4h5.3c-.3 1.3-.4 2.7-.4 4zm11.8 2h6c-.1 1.4-.5 2.7-1.1 4h-5.3c.3-1.3.4-2.7.4-4zm3.8-8H19c-.5-1.7-1.2-3.2-2.2-4.6C19.6 3 22 4.7 23.7 7zM11.2 2.4c-1 1.4-1.7 3-2.2 4.6H4.3C6 4.7 8.4 3 11.2 2.4zM4.3 21H9c.5 1.6 1.2 3.2 2.2 4.6-2.8-.7-5.2-2.3-6.9-4.6zm12.6 4.6c1-1.4 1.7-3 2.1-4.6h4.7c-1.7 2.3-4.1 3.9-6.8 4.6z"></path></svg>
            </span>
            <span class="project-view__text">Подключить домен</span>
          </a>

          <div class="project-view__url-block">
            <span class="project-view__url-block-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M22 23.1H4.9V6h9.5V3H1.9v23.1H25V13.6h-3z"></path><path d="M18 0v3h4.9L9.1 16.8l2.1 2.1L25 5.1V10h3V0z"></path></svg>
            </span>
            <div class="project-view__url-block-link">
              <span class="project-view__url-text">Адрес сайта: </span>
              <span class="project-view__url-link">
                <RouterLink :to="`/project/${id}/preview`">/project/{{ id }}/preview</RouterLink>
              </span>
            </div>
          </div>
        </div>

        <div class="project-view__panel-bottom">
          <div class="project-view__project-name">My project 1</div>

          <button class="project-view__new-page" type="button">
            <span class="project-view__new-page-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img" aria-hidden="true"><path d="M26.79 13H17V3.21h-4V13H3.21v4H13v9.79h4V17h9.79v-4z"></path></svg>
            </span>
            <span class="project-view__new-page-text">Создать новую страницу</span>
          </button>
        </div>
      </div>
    </div>

    <div class="project-view__pages-list">
      <div class="project-view__pages-list-title">Страницы сайта:</div>

      <ul class="pages-list">
        <li class="pages-list__item">
          <div class="pages-list__wrapper">
            <div class="pages-list__right">
              <a class="pages-list__image-block" href="">
                <div class="pages-list__image">
                  <img src="https://images.unsplash.com/photo-1718963892270-04300c864522?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                </div>
              </a>

              <a class="pages-list__name-block" href="">
                <span class="pages-list__home-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32" width="14px"><path d="M27 11L14-.06 1 11v21.06h26V11zm-8 21H9V20.91h10z"></path></svg>
                </span>
                <span class="pages-list__page-name">Blank page</span>
              </a>
            </div>

            <div class="pages-list__right">
              <a class="pages-list__settings" href="">
                <span class="pages-list__page-settings-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="14px"><path d="M25.72 15.27l1.33-1a2.47 2.47 0 00-.75-4.29l-1.6-.51a1.72 1.72 0 01-1.15-2l.37-1.66A2.43 2.43 0 0020.62 3l-1.55.65a1.68 1.68 0 01-2.15-.79l-.77-1.51a2.41 2.41 0 00-4.3 0l-.77 1.51a1.68 1.68 0 01-2.15.79L7.38 3a2.43 2.43 0 00-3.3 2.8l.37 1.66a1.72 1.72 0 01-1.15 2l-1.6.51a2.47 2.47 0 00-.7 4.27l1.33 1a1.73 1.73 0 01.4 2.29L1.78 19a2.45 2.45 0 002.15 3.77l1.67-.08a1.7 1.7 0 011.76 1.49l.22 1.68a2.42 2.42 0 004 1.49l1.23-1.15a1.68 1.68 0 012.29 0l1.23 1.15a2.42 2.42 0 004-1.49l.22-1.68a1.7 1.7 0 011.76-1.49l1.67.08A2.45 2.45 0 0026.22 19l-.9-1.43a1.73 1.73 0 01.4-2.3zM14 20.77A6.77 6.77 0 1120.77 14 6.77 6.77 0 0114 20.77z"></path></svg>
                </span>
                <span class="pages-list__page-settings-text">Настройки</span>
              </a>

              <a class="pages-list__page-del" href="">
                <span class="pages-list__page-del-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="14px" height="14px"><g><path d="M16.06 2.89V1.11H12v1.78H4.11v4.19h20.07V2.89zM6.11 26.89h16.07l2-16.81H4.11z"></path></g></svg>
                </span>
                <span class="pages-list__page-del-text">Удалить</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <!-- <h3 class="pages-list__empty-text">Страниц сайта нет</h3> -->
    </div>
  </div>
</template>

<script>
import jsonData from '@/data/projects.json';

export default {
  data() {
    return {
      jsonData: []
    };
  },
  mounted() {
    this.jsonData = jsonData;
  },
  props: ['id']
};
</script>