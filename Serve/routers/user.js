const Router = require("koa-router");
const user = new Router();
const { query, jwtVerify } = require("./../db/async-db");
const md5 = require("blueimp-md5");
const moment = require("moment");
const jwt = require("jsonwebtoken");

const key = "shared-secret";

// GET测试
user.get("/test", async ctx => {
  let sql = "SELECT * FROM user";
  let dataList = await query(sql);
  console.log(dataList);
  ctx.body = dataList;
});
// POST测试
user.post("/test/post", async ctx => {
  console.log(moment().format("YYYY-MM-DD"));
  console.log(ctx.request.body);
  ctx.body = ctx.request.body;
});

user.get("/get/userinfo", async ctx => {
  const token = ctx.header.authorization;
  let user_name = null;
  let user_id = null;
  await jwtVerify(token, key)
    .then(decoded => {
      user_name = decoded.user_name;
      user_id = decoded.user_id;
    })
    .catch(error => {
      console.log("令牌过期或非法令牌");
    });

  const sql =
    "SELECT user_id, user_name, email, phone, nickname, date FROM user_data WHERE user_name=? AND user_id=?";
  await query(sql, [user_name, user_id])
    .then(result => {
      if (result != 0) {
        result = JSON.parse(JSON.stringify(result))[0];
        result.date = moment(result.date).format("YYYY-MM-DD");
        ctx.body = {
          code: 1,
          message: "查询成功",
          data: result
        };
      } else {
        ctx.body = {
          code: 0,
          message: "查询失败"
        };
      }
    })
    .catch(error => {
      ctx.body = {
        code: 2,
        message: "查询失败"
      };
      throw error;
    });
});

user.post("/post/signin", async ctx => {
  const userData = ctx.request.body;
  userData.password = md5(userData.password, "mallUserPassword");
  const sqlGetUser =
    "SELECT user_id, user_name, email, phone, nickname, date FROM user_data WHERE user_name=? AND password=?";
  await query(sqlGetUser, [userData.userName, userData.password]).then(
    result => {
      if (result == 0) {
        ctx.body = {
          code: 0,
          message: "用户名或密码错误"
        };
      } else {
        result = JSON.parse(JSON.stringify(result))[0];
        result.date = moment(result.date).format("YYYY-MM-DD");
        const token = jwt.sign(
          {
            user_name: result.user_name,
            user_id: result.user_id
          },
          key,
          { expiresIn: 180 }
        );
        ctx.body = {
          code: 1,
          message: "登陆成功",
          data: result,
          token
        };
      }
    }
  );
});

user.post("/post/signup", async ctx => {
  let userData = ctx.request.body;
  let getUserName = "SELECT user_name FROM user_data WHERE user_name=?";
  await query(getUserName, [userData.userName])
    .then(async result => {
      if (result != 0) {
        ctx.body = {
          code: 0,
          message: "用户已存在"
        };
      } else {
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
        if (userVerification) {
          const getSql = "SELECT MAX(user_id) user_id FROM user_data";
          let userID = await query(getSql);
          userID = JSON.parse(JSON.stringify(userID));
          userID[0].user_id ? userID[0].user_id : (userID[0].user_id = 0);
          userID[0].user_id = parseInt(userID[0].user_id);
          userID[0].user_id += 1;
          userData.password = md5(userData.password, "mallUserPassword");
          let value = [
            userID[0].user_id,
            userData.userName,
            userData.password,
            userData.email,
            moment().format("YYYY-MM-DD")
          ];
          const setSql =
            "INSERT INTO user_data(user_id, user_name, password, email, date) VALUE (?, ?, ?, ?, ?)";
          await query(setSql, value)
            .then(() => {
              ctx.body = {
                code: 1,
                message: "注册成功"
              };
            })
            .catch(error => {
              ctx.body = {
                code: 4,
                message: "数据库错误"
              };
              throw error;
            });
        } else {
          ctx.body = {
            code: 3,
            message: "字符验证未通过"
          };
        }
      }
    })
    .catch(error => {
      ctx.body = {
        code: 2,
        message: "数据库错误"
      };
      throw error;
    });
});

module.exports = user;
