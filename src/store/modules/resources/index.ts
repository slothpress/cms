import { Module } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import ApplicationStateInterface from '@/store/modules/application/application-state.interface';
import ResourcesStateInterface from '@/store/modules/resources/resources-state.interface';

const state: ResourcesStateInterface = {};

const namespaced = true;

export const address: Module<ResourcesStateInterface, ApplicationStateInterface> = {
  namespaced,
  state,
  actions,
  mutations,
  getters
};
