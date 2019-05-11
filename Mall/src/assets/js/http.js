import ajax from "./ajax";

const BASE_URL = "http://127.0.0.1:3000";

// test
export const getTest = () => ajax(BASE_URL + "/api/test");
