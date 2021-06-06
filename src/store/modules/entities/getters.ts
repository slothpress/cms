import { GetterTree } from 'vuex';
import { RootState } from '@/store/root-state.interface';
import ResourcesState from '@/store/modules/entities/entities-state.interface';
import Entity from '@/store/modules/entities/domain/entity.interface';

export const getters: GetterTree<ResourcesState, RootState> = {
  getEntities(state): Entity[] {
    return state.entities;
  }
};
