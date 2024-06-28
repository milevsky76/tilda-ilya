import { defineStore } from 'pinia';

const defaultState = {
  pages: [
    {
      projectId: 0,
      id: 0,
      title: 'Page1',
      descr: 'Описание1',
      address: '',
      image:
        'https://plus.unsplash.com/premium_photo-1718119453300-73be4e1b6212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      projectId: 0,
      id: 1,
      title: 'Page2',
      descr: 'Описание2',
      address: '',
      image:
        'https://images.unsplash.com/photo-1718973818150-9c0c855d33b0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ],
  nextId: 2
};

export const usePagesStore = defineStore({
  id: 'pages',
  state: () => {
    const storedState = localStorage.getItem('pagesState');
    let pagesState = null;

    if (storedState) {
      pagesState = JSON.parse(storedState);
    } else {
      localStorage.setItem('pagesState', JSON.stringify(defaultState));
      pagesState = defaultState;
    }

    return pagesState;
  },
  getters: {
    getPagesByProjectId: (state) => (projectId) => {
      return state.pages.filter((page) => page.projectId === projectId);
    },
    getPageById: (state) => (id) => {
      return state.pages.find((page) => page.id === id);
    }
  },
  actions: {
    saveState() {
      localStorage.setItem('pagesState', JSON.stringify(this.$state));
    },
    addPage(projectId) {
      const newPage = {
        projectId: projectId,
        id: this.nextId++,
        title: 'Page',
        descr: '',
        address: '',
        image: ''
      };

      this.pages.push(newPage);

      this.saveState();
    },
    removePage(id) {
      this.pages = this.pages.filter((page) => page.id !== id);

      this.saveState();
    },
    savePage(editPage) {
      const pageId = editPage.id;
      const index = this.pages.findIndex((page) => page.id === pageId);

      if (index !== -1) {
        this.pages[index] = editPage;
      }

      this.saveState();
    }
  }
});
