const Router = require("koa-router");
const user = new Router();
const query = require("./../db/async-db");
// GET测试
user.get("/test", async ctx => {
  let sql = "SELECT * FROM user";
  let dataList = await query(sql);
  console.log(dataList);
  ctx.body = dataList;
});
// POST测试
user.post("/test/post", async ctx => {
  console.log(ctx.request.body);
  ctx.body = ctx.request.body;
});

user.post("/post/signup", async ctx => {
  let userData = ctx.request.body;
  let userVerification = null;
  const userName = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
  const email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const password = /^(?=.*[a-zA-Z])(?=.*\d)(?=.[~!@#$%^&*()_+`\-={}:";'<>?,.\/]{0,}).{6,16}$/;

  function verification(reg, data) {
    userVerification = reg.test(data);
  }
  for (const key in userData) {
    if (userData.hasOwnProperty(key)) {
      const element = userData[key];
      switch (key) {
        case "userName":
          verification(userName, element);
          break;
        case "email":
          verification(email, element);
          break;
        case "password":
          verification(password, element);
          break;

        default:
          break;
      }
    }
  }

  new Promise(async (resolve, reject) => {
    if (userVerification) {
      const getSql = "SELECT user_id FROM user_data";
      let userID = await query(getSql);
      userID = JSON.parse(JSON.stringify(userID));
      // userID[0].user_id = parseInt(userID[0].user_id);
      // userID[0].user_id++;
      console.log(userID);
      let value = [2, "app", "123456", "727751354@qq.com"];
      const setSql =
        "INSERT INTO user_data(user_id, user_name, password, email) VALUE (?, ?, ?, ?)";
      await query(setSql, value);
      resolve();
    } else {
      reject();
    }
  })
    .then(() => {
      console.log("注册成功");
      ctx.body = {
        code: 1,
        message: "注册成功"
      };
    })
    .catch(error => {
      ctx.body = {
        code: 0,
        message: "注册失败"
      };
      throw error;
    });
});

module.exports = user;
