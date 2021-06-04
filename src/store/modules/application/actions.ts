import { ApplicationModeEnum } from '@/store/modules/application/domain/application-mode.enum';
import ApplicationStateInterface from '@/store/modules/application/application-state.interface';
import { ActionTree } from 'vuex';

const actions: ActionTree<ApplicationStateInterface, ApplicationStateInterface> = {
  determineAppMode({ commit }): void {
    const appMode = window.location.origin.includes('localhost')
      ? ApplicationModeEnum.local
      : ApplicationModeEnum.production;
    commit('setApplicationMode', appMode);
  }
};

export default actions;
