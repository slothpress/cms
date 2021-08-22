<template>
  <div>
    <h3>{{ entity.title }}</h3>
    {{ entity }}
    <i-list-group :bordered="false">
      <i-list-group-item v-for="resource in entity.resources" :key="resource.index">
        {{ resource.content }}
      </i-list-group-item>
    </i-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import EntitySchema from '@/store/modules/entities/domain/entity-schema.interface';
import Entity from '@/store/modules/entities/domain/entity.interface';

const entities = namespace('entities');

@Component
export default class EntityItem extends Vue {
  @Prop() readonly entity!: Entity;

  @entities.Getter
  getResourcesForEntity!: (entityName: string) => EntitySchema | undefined;
}
</script>

<style scoped></style>
