<template>
  <base-layout>
    <entity-item :entity="entity" />
  </base-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLayout from '@/components/layout/BaseLayout.vue';
import EntityItem from '@/components/domain/entities/EntityItem.vue';

@Component({
  components: {
    BaseLayout,
    EntityItem
  }
})
export default class Entity extends Vue {
  private entity = this.$route.params.entity;
}
</script>
