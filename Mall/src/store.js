import Vue from "vue";
import Vuex from "vuex";
import data from "./store/data";
import userData from "./store/userData";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    data,
    userData
  }
});
