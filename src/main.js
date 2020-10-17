import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import VueApollo from 'vue-apollo';
import graphqlClient from './shared/apollo';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueApollo);
Vue.use(BootstrapVue);

const apolloProvider = new VueApollo({
  defaultClient: graphqlClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
});

new Vue({
  el: '#app',
  apolloProvider,
  store,
  router,
  render: h => h(App),
})