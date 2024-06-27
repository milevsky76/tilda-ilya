import { defineStore } from 'pinia';

export const usePagesStore = defineStore({
  id: 'pages',
  state: () => ({
    pages: [
      {
        projectId: 0,
        id: 0,
        title: 'Page',
        descr: 'Бла',
        address: '',
        image: 'https://plus.unsplash.com/premium_photo-1718119453300-73be4e1b6212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        projectId: 0,
        id: 1,
        title: 'Page',
        descr: 'Бла-бла',
        address: '',
        image: 'https://images.unsplash.com/photo-1718973818150-9c0c855d33b0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ],
    nextId: 2
  }),
  getters: {
    getPagesByProjectId: (state) => (projectId) => {
      return state.pages.filter(page => page.projectId === projectId)
    },
    getPageById: (state) => (id) => {
      return state.pages.find(page => page.id === id)
    },
  },
  actions: {
    addPage(projectId) {
      const newPage = {
        projectId: projectId,
        id: this.nextId++,
        title: 'Page',
        descr: '',
        address: '',
        image: ''
      }

      this.pages.push(newPage)
    },
    removePage(id) {
      this.pages = this.pages.filter(page => page.id !== id);
    },
    savePage(editPage) {
      const pageId = editPage.id;
      const index = this.pages.findIndex(page => page.id === pageId);

      if (index !== -1) {
        this.pages[index] = editPage;
      }
    }
  },
});
