<template>
  <div class="home">
    <mode-indicator />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ModeIndicator from '@/components/ModeIndicator.vue';

@Component({
  components: {
    ModeIndicator
  }
})
export default class Home extends Vue {}
</script>
