import {
  defineStore
} from 'pinia';

export const useProjectsStore = defineStore({
  id: 'projects',
  state: () => ({
    projects: [{
        id: 0,
        title: 'My project',
        pages: []
      },
      {
        id: 1,
        title: 'My project',
        pages: []
      },
      {
        id: 2,
        title: 'My project',
        pages: []
      },
      {
        id: 3,
        title: 'My project',
        pages: []
      }

    ],
    nextId: 4 
  }),
  getters: {
    getProjectById: (state) => (projectId) => {
      return state.projects.find(project => project.id === projectId);
    },
  },
  actions: {
    addProject() {
      const newProject = {
        id: this.nextId++,
        title: "My project",
        pages: []
      };

      this.projects.push(newProject);
    },
    removeProject(id) {
      this.projects = this.projects.filter(project => project.id !== id);
    },
  },
});