import { Module } from 'vuex';

import ResourcesState from '@/store/modules/resources/resources-state.interface';
import { actions } from '@/store/modules/resources/actions';
import { mutations } from '@/store/modules/resources/mutations';
import { getters } from '@/store/modules/resources/getters';
import { RootState } from '@/store/root-state.interface';

export const state: ResourcesState = {
  resources: []
};

const namespaced = true;

export const resources: Module<ResourcesState, RootState> = {
  namespaced,
  actions,
  mutations,
  getters,
  state
};
