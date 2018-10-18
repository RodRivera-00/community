import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/css/custom.css";
import "vue-awesome/icons";
import Vuebar from "vuebar";

Vue.use(Vuebar)
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  linkExactActiveClass: "active-link",
  render: h => h(App)
}).$mount("#app");
