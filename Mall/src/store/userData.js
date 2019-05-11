import { getTest } from "./../assets/js/http";

export default {
  state: {
    user: "User Data!",
    loginShow: false
  },
  getters: {},
  mutations: {
    setLoginShow(state) {
      state.loginShow = !state.loginShow;
    },
    getTextPort(state, result) {
      console.log(result);
    }
  },
  actions: {
    setLoginShow({ commit }) {
      commit("setLoginShow");
    },
    async getTextPort({ commit }, payload) {
      await getTest(payload).then(result => {
        commit("getTextPort", result);
      });
    }
  }
};
