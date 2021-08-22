import { MutationTree } from 'vuex';
import ResourcesState from '@/store/modules/entities/entities-state.interface';
import EntitySchema from '@/store/modules/entities/domain/entity-schema.interface';

export const mutations: MutationTree<ResourcesState> = {
  setEntities(state, entities: Array<EntitySchema>): void {
    state.entities = entities;
    console.log('state:', state);
  }
};
