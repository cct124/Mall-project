import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/productinfo",
      name: "productinfo",
      component: () => import("./views/ProductInfo.vue")
    },
    {
      path: "/shoppingcart",
      name: "shoppingcart",
      component: () => import("./views/ShoppingCart.vue")
    },
    {
      path: "/personalcenter",
      name: "PersonalCenter",
      component: () => import("./views/personal/PersonalCenter.vue"),
      children: [
        {
          path: "personal",
          name: "personal",
          component: () => import("./views/personal/Personal.vue")
        },
        {
          path: "order",
          name: "order",
          component: () => import("./views/personal/Order.vue")
        },
        {
          path: "message",
          name: "message",
          component: () => import("./views/personal/Message.vue")
        },
        {
          path: "service",
          name: "service",
          component: () => import("./views/personal/Service.vue")
        }
      ]
    }
  ]
});
