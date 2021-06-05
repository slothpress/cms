import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { application } from './modules/application';
import { resources } from './modules/resources';
import { RootState } from '@/store/root-state.interface';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    application,
    resources
  }
};

export default new Vuex.Store<RootState>(store);
