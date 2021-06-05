import { ApplicationModeEnum } from '@/store/modules/application/domain/application-mode.enum';
import ApplicationStateInterface from '@/store/modules/application/application-state.interface';
import { GetterTree } from 'vuex';

export const getters: GetterTree<ApplicationStateInterface, ApplicationStateInterface> = {
  getApplicationMode(state): ApplicationModeEnum | undefined {
    return state.mode;
  }
};
