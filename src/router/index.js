import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import ProjectEditView from '../views/ProjectEditView.vue'
import ProjectPreviewView from '../views/ProjectPreviewView.vue'
import PageEditView from '../views/PageEditView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
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
			path: '/page/:id/edit',
			name: 'PageEditView',
			component: PageEditView,
			props: true
		}
	]
})

export default router
