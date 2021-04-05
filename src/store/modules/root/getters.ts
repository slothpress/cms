import { ApplicationMode } from '@/store/models/applicationMode';
import RootState from '@/store/models/rootState';
import { GetterTree } from 'vuex';

const getters: GetterTree<RootState, RootState> = {
  getApplicationMode(state): ApplicationMode | undefined {
    return state.mode;
  }
};

export default getters;
