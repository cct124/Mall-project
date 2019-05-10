export default {
  state: {
    user: 'User Data!',
    loginShow: false
  },
  getters: {

  },
  mutations: {
    setLoginShow(state) {
      state.loginShow = !state.loginShow
    }
  },
  actions: {
    setLoginShow({ commit }) {
      commit("setLoginShow");
    }
  }
};
