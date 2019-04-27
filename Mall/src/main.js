import Vue from "vue";
import App from "./App.vue";
import { Carousel, CarouselItem } from "element-ui";
import router from "./router";
import store from "./store";
import "./icons";

Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
