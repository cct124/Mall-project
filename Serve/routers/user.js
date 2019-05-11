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

module.exports = user;
