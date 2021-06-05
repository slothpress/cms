<template>
  <div>
    <p>Application is running in {{ getApplicationMode }} Mode.</p>
  </div>
</template>

<script lang='ts'>
import { ApplicationModeEnum } from '@/store/modules/application/domain/application-mode.enum';
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component
export default class ModeIndicator extends Vue {
  @Action('determineAppMode') determineAppMode!: () => void;

  @Getter('getApplicationMode') getApplicationMode!: ApplicationModeEnum | undefined;

  mounted(): void {
    this.determineAppMode();
  }
}
</script>
