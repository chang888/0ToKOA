const Router = require('koa-router')
const router = new Router()

router.get('/v1/book/lastet', (ctx, next) => {
  ctx.body = 'book'
})
module.exports = router

