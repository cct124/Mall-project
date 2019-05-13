import axios from "axios";
import { localfetch } from "./../js/storage";

export default function ajax(
  url = "",
  { payload = {}, type = "GET", authToken = null } = {}
) {
  let pormise;
  return new Promise((resolve, reject) => {
    // if (authToken) axios.defaults.headers.common["Authorization"] = "token";
    if ("GET" === type) {
      let paramsStr = "";
      Object.keys(payload).forEach(key => {
        paramsStr += key + "=" + payload[key] + "&";
      });
      if (paramsStr !== "") {
        paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf("&"));
      }
      url += "?" + paramsStr;
      if (authToken) {
        const token = localfetch("mall_token");
        pormise = axios.get(url, {
          headers: { Authorization: token }
        });
      } else {
        pormise = axios.get(url);
      }
    } else if ("POST" === type) {
      pormise = axios.post(url, payload);
    }

    pormise
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
