import ajax from "./ajax";

// const BASE_URL = "http://127.0.0.1:3000";
const BASE_URL = "/api";

// test
export const getTest = payload =>
  ajax(BASE_URL + "/user/test/post", { payload, type: "POST" });

// 注册
export const signupPOST = payload =>
  ajax(BASE_URL + "/user/post/signup", { payload, type: "POST" });

// 登陆
export const signinPOST = payload =>
  ajax(BASE_URL + "/user/post/signin", { payload, type: "POST" });

// 获取用户信息
export const userInfoGET = () =>
  ajax(BASE_URL + "/user/get/userinfo", { authToken: "token" });

// 获取用户信息
export const setUserInfoPOST = payload =>
  ajax(BASE_URL + "/user/post/updatauserinfo", {
    payload,
    type: "POST",
    authToken: "token"
  });
