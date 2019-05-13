import { getTest } from "./../assets/js/http";

export default {
  state: {
    user: "User Data!",
    loginShow: false,
    userInfo: null
  },
  getters: {},
  mutations: {
    setLoginShow(state) {
      state.loginShow = !state.loginShow;
    },
    getTextPort(state, result) {
      console.log(result);
    },
    postSignUpPort(state, result) {
      console.log(result);
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
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
    },
    setUserInfo({ commit }, payload) {
      commit("setUserInfo", payload);
    }
  }
};
