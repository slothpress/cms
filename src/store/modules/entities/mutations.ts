import { MutationTree } from 'vuex';
import ResourcesState from '@/store/modules/entities/entities-state.interface';
import Entity from '@/store/modules/entities/domain/entity.interface';

export const mutations: MutationTree<ResourcesState> = {
  setEntities(state, entities: Array<Entity>): void {
    state.entities = entities;
    console.log('state:', state);
  }
};
