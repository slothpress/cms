import { ActionTree } from 'vuex';
import ResourcesState from '@/store/modules/resources/resources-state.interface';
import { RootState } from '@/store/root-state.interface';
import Resource from '@/store/modules/resources/domain/resource.interface';

export const actions: ActionTree<ResourcesState, RootState> = {
  handleResourceAddition({ commit }, ressourceType): void {
    console.log('action', ressourceType);
    const resource: Resource = {
      type: ressourceType,
      content: '',
      index: 0
    };
    commit('saveResource', resource);
  }
};
