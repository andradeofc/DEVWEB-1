import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueRouter from "vue-router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import * as services from "./services/";
Vue.prototype.$services = services;

Vue.use(VueRouter);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");
