const path = require("path");
const Koa = require("koa");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const Static = require("koa-static");
const Router = require("koa-router");
// const jwt = require("jsonwebtoken");

const app = new Koa();

app.use(logger());
app.use(bodyParser());
app.use(Static(path.join(__dirname, "./static")));

const router = new Router();
router.use('/user', user.routes(), user.allowedMethods())

app.listen(3000, () => {
  console.log("[demo] mall project is starting at port 3000");
});
