import { createPinia } from 'pinia';
import { ProjectsStore } from './modules/projects';

const store = createPinia();

store.use(ProjectsStore);

export default store;