const Koa = require("koa");
const Next = require("next");
const Router = require("koa-router");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextServer = Next({ dev });
const prepare = nextServer.prepare();
const handle = nextServer.getRequestHandler();

const app = new Koa();
const router = new Router();

router.get(['/home', '/home/:tab'], async ctx => {
  const tab = ctx.query.tab || ctx.params.tab;
  const pageName = tab ? `/${tab}` : '';
  await nextServer.render(ctx.req, ctx.res, `/home${pageName}`, ctx.query);
  ctx.respond = false;
});

router.get("*", async ctx => {
  await handle(ctx.req, ctx.res);
  ctx.respond = false;
});

app.use(async (ctx, next) => {
  await prepare;
  ctx.res.statusCode = 200;
  await next();
});

app.use(router.routes());
app.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`);
});
