const Router = require("koa-router");

const user = new Router();

user.get("/test", async ctx => {
  console.log(ctx.request.body);
});
