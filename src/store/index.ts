import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import ApplicationStateInterface from './modules/application/application-state.interface';
import state from './modules/application/state';
import actions from './modules/application/actions';
import mutations from './modules/application/mutations';
import getters from './modules/application/getters';

Vue.use(Vuex);

const store: StoreOptions<ApplicationStateInterface> = {
  state,
  actions,
  mutations,
  getters,
  modules: {}
};

export default new Vuex.Store<ApplicationStateInterface>(store);
