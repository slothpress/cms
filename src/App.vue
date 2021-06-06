<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const entities = namespace('entities');

@Component
export default class App extends Vue {
  @entities.Action
  setupStoreFromConfig!: () => void;

  created(): void {
    this.setupStoreFromConfig();
  }
}
</script>
