import { ApplicationModeEnum } from '@/store/modules/application/domain/application-mode.enum';
import ApplicationStateInterface from '@/store/modules/application/application-state.interface';
import { MutationTree } from 'vuex';

const mutations: MutationTree<ApplicationStateInterface> = {
  setApplicationMode(state, applicationMode: ApplicationModeEnum): void {
    state.mode = applicationMode;
  }
};

export default mutations;
