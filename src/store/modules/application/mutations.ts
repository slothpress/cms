import { ApplicationModeEnum } from '@/store/modules/application/domain/application-mode.enum';
import ApplicationState from '@/store/modules/application/application-state.interface';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<ApplicationState> = {
  setApplicationMode(state, applicationMode: ApplicationModeEnum): void {
    state.mode = applicationMode;
  }
};
