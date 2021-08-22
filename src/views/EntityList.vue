<template>
  <base-layout>
    <entity-item-list :entity-name="entityName" />
  </base-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLayout from '@/components/layout/BaseLayout.vue';
import EntityItemList from '@/components/domain/entities/EntityItemList.vue';

@Component({
  components: {
    BaseLayout,
    EntityItemList
  }
})
export default class EntityList extends Vue {
  private entityName = this.$route.params.name;
}
</script>
