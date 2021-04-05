<template>
  <div>
    <p>Application is running in {{ getApplicationMode }} Mode.</p>
  </div>
</template>

<script lang="ts">
import { ApplicationMode } from '@/store/models/applicationMode';
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component
export default class ModeIndicator extends Vue {
  @Action('determineAppMode') determineAppMode!: () => void;

  @Getter('getApplicationMode') getApplicationMode!: ApplicationMode | undefined;

  mounted(): void {
    this.determineAppMode();
  }
}
</script>
