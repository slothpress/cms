import { ApplicationMode } from '@/store/models/applicationMode';
import RootState from '@/store/models/rootState';
import { MutationTree } from 'vuex';

const mutations: MutationTree<RootState> = {
  setApplicationMode(state, applicationMode: ApplicationMode): void {
    state.mode = applicationMode;
  }
};

export default mutations;
