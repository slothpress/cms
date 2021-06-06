import { ActionTree } from 'vuex';
import ResourcesState from '@/store/modules/entities/entities-state.interface';
import { RootState } from '@/store/root-state.interface';
import Entity from '@/store/modules/entities/domain/entity.interface';
import { ResourceType } from '@/store/modules/entities/domain/resource-type.enum';

export const actions: ActionTree<ResourcesState, RootState> = {
  setupStoreFromConfig({ commit }): void {
    const mockEntities: Array<Entity> = [
      { name: 'testEntity', resources: [ResourceType.TEXTAREA] },
      { name: 'anotherEntity', resources: [ResourceType.TEXTAREA] },
      { name: 'yetAnotherEntity', resources: [ResourceType.TEXTAREA] }
    ];
    commit('setEntities', mockEntities);
  }
};
