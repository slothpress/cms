<template>
  <i-layout>
    <base-header />

    <i-layout-content>
      <i-container>
        <add-ressource-button />
      </i-container>
    </i-layout-content>
  </i-layout>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import BaseHeader from '@/components/layout/BaseHeader.vue';
import AddRessourceButton from '@/components/domain/ressources/AddRessourceButton.vue';

@Component({
  components: {
    BaseHeader,
    AddRessourceButton
  }
})
export default class BaseLayout extends Vue {

}
</script>
