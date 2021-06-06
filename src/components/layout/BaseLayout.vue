<template>
  <i-layout>
    <base-header />

    <i-layout-content>
      <i-container>
        <entities-list />
      </i-container>
    </i-layout-content>
  </i-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseHeader from '@/components/layout/BaseHeader.vue';
import EntitiesList from '@/components/domain/entities/EntitiesList.vue';

@Component({
  components: {
    BaseHeader,
    EntitiesList
  }
})
export default class BaseLayout extends Vue {}
</script>
