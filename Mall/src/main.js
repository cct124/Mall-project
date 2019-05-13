import Vue from "vue";
import App from "./App.vue";
import {
  Carousel,
  CarouselItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Message
} from "element-ui";
import router from "./router";
import store from "./store";
import "./icons";

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

Vue.filter("productPrice", value => {
  return "￥" + value.toFixed(2);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
