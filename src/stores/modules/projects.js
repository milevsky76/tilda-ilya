import {
  defineStore
} from 'pinia';

export const useProjectsStore = defineStore({
  id: 'projects',
  state: () => ({
    projects: [{
        id: 0,
        title: 'My project1'
      },
      {
        id: 1,
        title: 'My project2'
      },
      {
        id: 2,
        title: 'My project3'
      },
      {
        id: 3,
        title: 'My project4'
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