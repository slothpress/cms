<template>
  <div>
    <h3>Entities:</h3>
    <i-list-group :bordered="false">
      <i-list-group-item v-for="entity in getEntities" :key="entity.index">
        {{ entity.name }}
      </i-list-group-item>
    </i-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import Entity from '@/store/modules/entities/domain/entity.interface';

const entities = namespace('entities');

@Component
export default class EntitiesList extends Vue {
  @entities.Getter
  getEntities!: Entity[];
}
</script>

<style scoped></style>
