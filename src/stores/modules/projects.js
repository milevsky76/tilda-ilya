import {
  defineStore
} from 'pinia';

export const useProjectsStore = defineStore({
  id: 'projects',
  state: () => ({
    projects: [{
        id: 1,
        title: 'My project'
      },
      {
        id: 2,
        title: 'My project'
      },
      {
        id: 3,
        title: 'My project'
      },
      {
        id: 4,
        title: 'My project'
      }

    ],
  }),
  actions: {
    addProject(project) {
      this.projects.push(project);
    },
    removeProject(index) {
      this.projects.splice(index, 1);
    },
  },
});