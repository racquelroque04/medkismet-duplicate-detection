<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  computed: {
    toastObj: {
      set (isLoading) {
        this.$store.commit('toastObj', isLoading);
      },
      get () {
        return this.$store.getters.toastObj;
      }
    }
  },
  watch: {
    toastObj() {
      this.$bvToast.toast(this.toastObj.content, this.toastObj);
    }
  }
};
</script>

<style lang="scss">
  /* Import Bootstrap Vue Styles */
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
  // Import Main styles for this application
  @import 'assets/scss/style.scss';
</style>
