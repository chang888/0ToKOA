const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
  console.log(1);
  next()
  console.log(2);
});
app.use(async (ctx, next) => {
  console.log(3);
  console.log(4);

});
function f1() {
  console.log(1);
}

function f2() {
  console.log(2);
}

function f3() {
  console.log(3);
}

function f4() {
  console.log(4);
}
app.listen(3000)