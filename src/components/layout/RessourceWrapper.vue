<template>
  <i-row center-xs>
    <i-column xs='8'>
      <slot/>
    </i-column>
  </i-row>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RessourceWrapper extends Vue {

}
</script>

<style scoped>

</style>
