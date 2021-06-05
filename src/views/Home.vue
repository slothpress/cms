<template>
  <base-layout></base-layout>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import BaseLayout from '@/components/layout/BaseLayout.vue';

@Component({
  components: {
    BaseLayout
  }
})
export default class Home extends Vue {
}
</script>
