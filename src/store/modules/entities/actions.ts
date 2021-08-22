import { ActionTree } from 'vuex';
import ResourcesState from '@/store/modules/entities/entities-state.interface';
import { RootState } from '@/store/root-state.interface';
import EntitySchema from '@/store/modules/entities/domain/entity-schema.interface';
import { ResourceType } from '@/store/modules/entities/domain/resource-type.enum';

export const actions: ActionTree<ResourcesState, RootState> = {
  setupStoreFromConfig({ commit }): void {
    const mockEntities: Array<EntitySchema> = [
      {
        name: 'testEntity',
        allowedResources: [ResourceType.TEXTAREA],
        entries: [
          {
            title: 'eine Test Entity',
            resources: [
              { type: ResourceType.TEXTAREA, content: 'ich bin ein String Content', index: 1 }
            ]
          }
        ]
      },
      {
        name: 'anotherEntity',
        allowedResources: [ResourceType.TEXTAREA],
        entries: [{ title: 'eine anotherTest Entity', resources: [] }]
      },
      {
        name: 'yetAnotherEntity',
        allowedResources: [ResourceType.TEXTAREA],
        entries: [{ title: 'eine yetAnotherTest Entity', resources: [] }]
      }
    ];
    commit('setEntities', mockEntities);
  }
};
