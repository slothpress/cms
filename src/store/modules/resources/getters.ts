import { GetterTree } from 'vuex';
import { RootState } from '@/store/root-state.interface';
import ResourcesState from '@/store/modules/resources/resources-state.interface';
import Resource from '@/store/modules/resources/domain/resource.interface';

export const getters: GetterTree<ResourcesState, RootState> = {
  getApplicationMode(state): Resource[] {
    return state.resources;
  }
};
