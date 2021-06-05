<template>
  <i-layout-header>
    <i-navbar>
      <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
      <i-navbar-items class="_justify-content-end">
        <i-nav>
          <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
          <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
          <i-nav-item :to="{ name: 'contact' }">Contact</i-nav-item>
        </i-nav>
      </i-navbar-items>
    </i-navbar>
  </i-layout-header>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BaseHeader extends Vue {

}
</script>

<style scoped>
  background:
</style>
