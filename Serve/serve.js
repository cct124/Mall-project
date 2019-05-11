const path = require("path");
const Koa = require("koa");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const Static = require("koa-static");
const Router = require("koa-router");
// const jwt = require("jsonwebtoken");

const user = require("./routers/user");

const app = new Koa();

app.use(logger());
app.use(bodyParser());
app.use(Static(path.join(__dirname, "./static")));

// 子路由
const router = new Router();
router.use("/user", user.routes(), user.allowedMethods());

// 装载路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("[demo] mall project is starting at port 3000");
});
