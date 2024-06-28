import { defineStore } from 'pinia';

const defaultState = {
  projects: [
    {
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
};

export const useProjectsStore = defineStore({
  id: 'projects',
  state: () => {
    const storedState = localStorage.getItem('projectsState');
    let projectsState = null;

    if (storedState) {
      projectsState = JSON.parse(storedState);
    } else {
      localStorage.setItem('projectsState', JSON.stringify(defaultState));
      projectsState = defaultState;
    }

    return projectsState;
  },
  getters: {
    getProjectById: (state) => (projectId) => {
      return state.projects.find((project) => project.id === projectId);
    }
  },
  actions: {
    saveState() {
      localStorage.setItem('projectsState', JSON.stringify(this.$state));
    },
    addProject() {
      const newProject = {
        id: this.nextId++,
        title: 'My project',
        pages: []
      };

      this.projects.push(newProject);

      this.saveState();
    },
    removeProject(id) {
      this.projects = this.projects.filter((project) => project.id !== id);

      this.saveState();
    }
  }
});
