import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import registrant from './modules/registrant';

Vue.use(Vuex);
export default new Store({
  modules: {
    registrant
  },
  state: {
    isLoading: false,
    toastConfigObj: {}
  },
  getters: {
    toastObj (state) {
      return state.toastConfigObj;
    }
  },
  mutations: {
    updateToastConfig(state, toastConfig) {
      console.log(toastConfig)
      const newToastConfig = {};
      const {
        message,
        autoHideDelay,
        appendToast,
        variant,
        isSolid,
        position,
        title
      } = toastConfig;
      const ifJWT = message === '' || message ? false : message.toUpperCase().indexOf('JWT') >= 0;
      newToastConfig.variant = variant || 'default';
      newToastConfig.isSolid = isSolid || true;
      newToastConfig.position = position || 'b-toaster-top-left';
      newToastConfig.show = !ifJWT;
      newToastConfig.title = title || (
        variant === 'danger' ? 'Error' : 'Success'
      );
      newToastConfig.content = message || 'Default Content';
      newToastConfig.autoHideDelay = autoHideDelay || 5000;
      newToastConfig.appendToast = appendToast || true;
      state.toastConfigObj = newToastConfig;
    }
  }
});