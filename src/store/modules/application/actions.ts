import { ApplicationModeEnum } from '@/store/modules/application/domain/application-mode.enum';
import ApplicationState from '@/store/modules/application/application-state.interface';
import { ActionTree } from 'vuex';
import { RootState } from '@/store/root-state.interface';

export const actions: ActionTree<ApplicationState, RootState> = {
  determineAppMode({ commit }): void {
    const appMode = window.location.origin.includes('localhost')
      ? ApplicationModeEnum.local
      : ApplicationModeEnum.production;
    commit('setApplicationMode', appMode);
  }
};
