import ajax from "./ajax";

// const BASE_URL = "http://127.0.0.1:3000";
const BASE_URL = "/api";

// test
export const getTest = params => ajax(BASE_URL + "/user/test", params);
