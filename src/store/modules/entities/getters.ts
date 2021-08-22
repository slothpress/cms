import { GetterTree } from 'vuex';
import { RootState } from '@/store/root-state.interface';
import ResourcesState from '@/store/modules/entities/entities-state.interface';
import EntitySchema from '@/store/modules/entities/domain/entity-schema.interface';

export const getters: GetterTree<ResourcesState, RootState> = {
  getEntities(state): EntitySchema[] {
    return state.entities;
  },
  getEntityByName: state => (entityName: string): EntitySchema | undefined =>
    state.entities.find(entity => entity.name === entityName)
};
