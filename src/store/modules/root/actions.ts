import { ApplicationMode } from '@/store/models/applicationMode';
import RootState from '@/store/models/rootState';
import { ActionTree } from 'vuex';

const actions: ActionTree<RootState, RootState> = {
  determineAppMode({ commit }): void {
    const appMode = window.location.origin.includes('localhost')
      ? ApplicationMode.local
      : ApplicationMode.production;
    commit('setApplicationMode', appMode);
  }
};

export default actions;
