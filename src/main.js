import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import KnobControl from 'vue-knob-control';

Vue.config.productionTip = false;

Vue.use(KnobControl)

Vue.component('knob-control', KnobControl)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
