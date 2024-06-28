import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import ProjectEditView from '../views/ProjectEditView.vue'
import ProjectPreviewView from '../views/ProjectPreviewView.vue'
import PageEditView from '../views/PageEditView.vue'
import PagePreviewView from '../views/PagePreviewView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'

import { useAuthStore } from '../stores/modules/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView,
      meta: {
        header: null
      }
    },
    {
      path: '/project/:id',
      name: 'ProjectView',
      component: ProjectView,
      props: true
    },
    {
      path: '/project/:id/edit',
      name: 'ProjectEditView',
      component: ProjectEditView,
      props: true
    },
    {
      path: '/project/:id/preview',
      name: 'ProjectPreviewView',
      component: ProjectPreviewView,
      props: true
    },
    {
      path: '/project/:id/page/:pageId/edit',
      name: 'PageEditView',
      component: PageEditView,
      props: true,
      meta: {
        header: 'HeaderPage'
      }
    },
    {
      path: '/project/:id/page/:pageId/preview',
      name: 'PagePreviewView',
      component: PagePreviewView,
      props: true,
      meta: {
        header: null
      }
    },
    {
      path: '/profile',
      name: 'ProfileView',
      component: ProfileView,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/:catchAll(.*)',
      redirect: to => {
        if (useAuthStore().isAuthenticated && useAuthStore().isTokenValid()) {
          return '/';
        } else if (!useAuthStore().isAuthenticated && useAuthStore().isTokenValid()) {
          return '/';
        } else {
          return '/login';
        }
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = useAuthStore().isAuthenticated;
  const isTokenValid = useAuthStore().isTokenValid();

  if (isTokenValid) {
    if (to.meta.requiresAuth) {
      // Защищенный маршрут meta requiresAuth
      if (isAuthenticated) {
        next();
      } else {
        next('/login');
      }
    } else if (to.path === '/login') {
      // Маршрут входа
      if (isAuthenticated) {
        next('/');
      } else {
        next();
      }
    } else {
      // Любой другой маршрут
      next();
    }
  } else {
    // Токен не валидный
    if (to.path === '/login') {
      next();
    } else {
      next('/login');
    }
  }
});

export default router
