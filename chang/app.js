const Koa = require('koa')
const requireDirectory = require('require-directory')
const Router = require('koa-router')
const app = new Koa()


requireDirectory(module, './api', {
	visit: whenLoadModele
})
function whenLoadModele(obj) {
	if(obj instanceof Router) {
		app.use(obj.routes())
	}
} 
// app.use((ctx,next)=> {
// 	ctx.body = {
// 		key: '222'
// 	}
// })1

app.listen(3000)