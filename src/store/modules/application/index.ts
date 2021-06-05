import { Module } from 'vuex';

import ApplicationState from '@/store/modules/application/application-state.interface';
import { RootState } from '@/store/root-state.interface';
import { actions } from '@/store/modules/application/actions';
import { mutations } from '@/store/modules/application/mutations';
import { getters } from '@/store/modules/application/getters';

export const state: ApplicationState = {};

const namespaced = true;

export const application: Module<ApplicationState, RootState> = {
  namespaced,
  actions,
  mutations,
  getters,
  state
};
