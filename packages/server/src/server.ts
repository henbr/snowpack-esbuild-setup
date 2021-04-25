import Koa from "koa";
import Router from "@koa/router";

console.log("Starting server...");

const app = new Koa();
const router = new Router({
  prefix: "/api",
});

router.get("/test", (ctx, next) => {
  ctx.body = JSON.stringify({ message: "Server says hi!" });
  ctx.status = 200;
  next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
