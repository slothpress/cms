import { MutationTree } from 'vuex';
import ResourcesState from '@/store/modules/resources/resources-state.interface';
import Resource from '@/store/modules/resources/domain/resource.interface';

export const mutations: MutationTree<ResourcesState> = {
  saveResource(state, resource: Resource): void {
    console.log('mutation', resource);
    state.resources.splice(resource.index, 0, resource);
    console.log('state', state);
  }
};
