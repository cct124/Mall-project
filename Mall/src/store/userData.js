import {
  getTest,
  signupPOST,
  signinPOST,
  userInfoGET,
  setUserInfoPOST
} from "./../assets/js/http";
import { localsave } from "./../assets/js/storage";

export default {
  state: {
    user: "User Data!",
    loginShow: false,
    userInfo: {
      nickname: "",
      user_name: "",
      email: "",
      phone: "",
      date: ""
    }
  },
  getters: {
    stateUserInfo: state => {
      let payload = {
        info: [
          {
            item: "昵称：",
            value: state.userInfo.nickname,
            placeholder: "Nickname"
          },
          {
            item: "账号：",
            value: state.userInfo.user_name,
            placeholder: "User Name"
          },
          {
            item: "邮箱：",
            value: state.userInfo.email,
            placeholder: "Email"
          },
          {
            item: "电话：",
            value: state.userInfo.phone,
            placeholder: "Phone"
          }
        ],
        date: {
          item: "注册时间：",
          value: state.userInfo.date
        }
      };
      return payload;
    }
  },
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
    getUserInfo(state, payload) {
      state.userInfo = payload;
    }
  },
  actions: {
    // 设置登陆头像显示和隐藏
    setLoginShow({ commit }) {
      commit("setLoginShow");
    },
    // API测试
    async getTextPort({ commit }, payload) {
      await getTest(payload).then(result => {
        commit("getTextPort", result);
      });
    },
    // 获取用户信息
    async getUserInfo({ commit }) {
      await userInfoGET()
        .then(result => {
          if (result.code === 1) {
            commit("getUserInfo", result.data);
          } else {
            this._vm.$message.error(result.message);
          }
        })
        .catch(error => {
          throw error;
        });
    },
    // 登陆
    async getSignInPOST({ commit }, payload) {
      await signinPOST(payload)
        .then(result => {
          if (result.code === 1) {
            this._vm.$message({
              message: result.message,
              type: "success"
            });
            commit("getUserInfo", result.data);
            localsave("mall_token", result.token);
          } else {
            this._vm.$message.error(result.message);
          }
        })
        .catch(error => {
          throw error;
        });
    },
    // 注册
    // eslint-disable-next-line
    async getSignUpPOST({ commit }, payload) {
      await signupPOST(payload)
        .then(result => {
          if (result.code === 1) {
            this._vm.$message({
              message: result.message,
              type: "success"
            });
          } else {
            this._vm.$message.error(result.message);
          }
        })
        .catch(error => {
          throw error;
        });
    },
    // 更新用户信息
    // eslint-disable-next-line
    async updataUserInfo({ commit }, payload) {
      await setUserInfoPOST(payload)
        .then(result => {
          if (result.code === 1) {
            this._vm.$message({
              message: result.message,
              type: "success"
            });
          } else {
            this._vm.$message.error(result.message);
          }
        })
        .catch(error => {
          throw error;
        });
    }
  }
};
