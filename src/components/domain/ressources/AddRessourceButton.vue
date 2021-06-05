<template>
  <i-dropdown>
    <i-button>Add Content Block</i-button>
    <i-dropdown-menu>
      <i-dropdown-item
        @click="handleResourceAddition(resourceType)"
        v-for="resourceType in resourcesList"
        :key="resourceType.index"
      >
        {{ resourceType }}
      </i-dropdown-item>
    </i-dropdown-menu>
  </i-dropdown>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ResourceType } from '@/store/modules/resources/domain/resource-type.enum';
import { namespace } from 'vuex-class';

const resources = namespace('resources');

@Component
export default class AddRessourceButton extends Vue {
  private resourcesList = Object.values(ResourceType);

  @resources.Action
  handleResourceAddition!: (resourceType: ResourceType) => void;
}
</script>

<style scoped></style>
