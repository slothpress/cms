import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import RootState from './models/rootState';
import state from './modules/root/state';
import actions from './modules/root/actions';
import mutations from './modules/root/mutations';
import getters from './modules/root/getters';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state,
  actions,
  mutations,
  getters,
  modules: {}
};

export default new Vuex.Store<RootState>(store);
