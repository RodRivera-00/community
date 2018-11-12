import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import Charting from "./components/Charting.vue";
import News from "./views/News.vue";
import Ico from "./views/Ico.vue";
import Vol from "./views/Volume.vue";
import CoinInfo from "./views/CoinInfo.vue";
import P2P from "./views/P2P.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/charting/:id",
      component: Charting
    },
      {
        path: "/news/:id",
          component: News

      },
      {
        path: "/ico",
          component: Ico
      },
      {
        path: "/volume",
          component: Vol

      },
      {
        path: "/coin-information",
          component: CoinInfo
      },
      {
          path: "/p2p",
          component: P2P
      }
  ]
});
