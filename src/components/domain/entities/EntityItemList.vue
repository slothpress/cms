<template>
  <div>
    <h3>
      There are currently {{ getEntityByName(entityName).entries.length }} {{ entityName }} Items:
    </h3>
    <i-list-group :bordered="false">
      <i-list-group-item v-for="entry in getEntityByName(entityName).entries" :key="entry.index">
        <router-link :to="{ name: 'Entity', params: { entity: entry } }">
          {{ entry.title }}
        </router-link>
      </i-list-group-item>
    </i-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import EntitySchema from '@/store/modules/entities/domain/entity-schema.interface';

const entities = namespace('entities');

@Component
export default class EntityItemList extends Vue {
  @Prop(String) readonly entityName: string | undefined;

  @entities.Getter
  getEntityByName!: (entityName: string) => EntitySchema | undefined;
}
</script>

<style scoped></style>
