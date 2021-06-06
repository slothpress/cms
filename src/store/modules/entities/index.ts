import { Module } from 'vuex';

import EntitiesState from '@/store/modules/entities/entities-state.interface';
import { actions } from '@/store/modules/entities/actions';
import { mutations } from '@/store/modules/entities/mutations';
import { getters } from '@/store/modules/entities/getters';
import { RootState } from '@/store/root-state.interface';

export const state: EntitiesState = {
  entities: []
};

const namespaced = true;

export const entities: Module<EntitiesState, RootState> = {
  namespaced,
  actions,
  mutations,
  getters,
  state
};
