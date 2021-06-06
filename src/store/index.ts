import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { application } from './modules/application';
import { entities } from './modules/entities';
import { RootState } from '@/store/root-state.interface';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    application,
    entities
  }
};

export default new Vuex.Store<RootState>(store);
