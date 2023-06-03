
const express = require('express')
const cookieParser = require('cookie-parser')
var session = require('express-session')
const MongoStore = require('connect-mongo')
const app = express()

app.use(cookieParser())

app.use(session({
    name: 'sid', // sessionid 的名称
    secret: 'yiluxiu', //参与加密的字符串（签名）
    saveUninitialized: false, // 是否为每次请求都设置一个cookie来存储session的id
    resave: true,//每次请求都重新 保存session 延长session的保存你时间
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/bilibili" }),
    cookie: {
        httpOnly: true, //前端不能访问cookies
        maxAge: 1000 * 300 //控制 sessionid的过期时间
    }
}))
app.get('/', (req, res) => {
    res.send('home')
})
/**
 * @param username
 * @param password
 */
app.get('/login', (req, res) => {
    if (req.query.username === 'admin' && req.query.password === 'admin') {
        // 设置session
        req.session.username = 'admin';

        res.send('登陆成功')
    } else {
        res.send('登录失败')
    }
})

/**
 * @param  
 */
app.get('/cart', (req, res) => {
    if (req.session.username) {
        res.send('购物车页面')
    } else {
        res.send('未登录')
    }
})
/**
 * @param  
 */
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send('退出成功')
    })
})

app.listen('3000')