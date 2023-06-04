var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
const MongoStore = require('connect-mongo')
var indexRouter = require('./routes/web/index');
var authRouter = require('./routes/web/auth');
const { DBHOOST, DBPORT, DBNAME } = require('./config/config')
//导入account路由
const accountRouter = require('./routes/api/account')
const authApiRouter = require('./routes/api/auth')
var app = express();
app.use(session({
  name: 'sid', // sessionid 的名称
  secret: 'yiluxiu', //参与加密的字符串（签名）
  saveUninitialized: false, // 是否为每次请求都设置一个cookie来存储session的id
  resave: true,//每次请求都重新 保存session 延长session的保存你时间
  store: MongoStore.create({ mongoUrl: `mongodb://${DBHOOST}:${DBPORT}/${DBNAME}`}),
  cookie: {
      httpOnly: true, //前端不能访问cookies
      maxAge: 1000 * 60*60*24 //控制 sessionid的过期时间
  }
}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/api', accountRouter);
app.use('/api', authApiRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('404')
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
