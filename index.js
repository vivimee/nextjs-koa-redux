const Koa = require("koa");
const Next = require("next");
const Router = require("koa-router");

const nextServer = Next({ dev: true });
const prepare = nextServer.prepare();
const handler = nextServer.getRequestHandler();
const app = new Koa();
const router = new Router();

const tabNames = ['job', 'message', 'my', 'notification', 'score'];
router.get(["/home", "/home/:tab"], async ctx => {
  const tab = ctx.query.tab || ctx.params.tab;
  const pageName =  tabNames.includes(tab) ? `/home/${tab}` : '/home';
  ctx.req.extendShowMenu = true;
  await nextServer.render(ctx.req, ctx.res, pageName, ctx.query);
  ctx.respond = false;
});
router.get("*", async ctx => {
  await handler(ctx.req, ctx.res);
  ctx.respond = false;
});

app.use(async (_, next) => {
  await prepare;
  await next();
});
app.use(async (ctx, next) => {
  ctx.res.statusCode = 200;
  await next();
});
app.use(router.routes());

app.listen(3000, () => {
  console.log("server listening at: http://127.0.0.1:3000/home");
});
