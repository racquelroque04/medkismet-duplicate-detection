<template>
  <b-container fluid class="default-container">
    <Header />
    <router-view />
  </b-container>
</template>

<script>
import Header from '../views/layout/Header';

export default {
  name: 'DefaultContainer',
  components: {
    Header
  }
}
</script>

<style lang="scss">
.default-container {
  padding-left: 0;
  padding-right: 0;
}
</style>
