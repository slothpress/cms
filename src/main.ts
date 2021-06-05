import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Inkline } from '@inkline/inkline/src';
import * as components from '@inkline/inkline/src/components';
import '@inkline/inkline/src/inkline.scss';

Vue.use(Inkline, { components });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
