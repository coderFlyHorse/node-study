const express = require('express')

const {recordMiddleware,checkRouteMiddleware} = require('./middleware')

const fs = require('fs')
const path = require('path')
const homeRouter = require('./routes/homeRoutes')
const adminRouter = require('./routes/adminRoutes')
//获取url参数
const bodyParser = require('body-parser')
const app = express()
// 路由模块化
app.use(homeRouter)
app.use(adminRouter)
// Json格式的请求体中间件
const jsonParser = bodyParser.json()
// 解析json格式的中间件
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// 防盗链中间件   防止外部网站盗用本站资源
// app.use((req, res, next) => {
//     // 检测请求头中的referer
//     let referer = req.get("referer")
//     console.log(referer);
//     if (referer) {
//         let url = new URL(referer)
//         let hostname = url.hostname

//         console.log(hostname);
//         if (hostname != '127.0.0.1') {
//             res.status(404).send("<h1>404 Not Found</h1>");
//             return
//         }
//     }
//     next();

// })
// 静态资源中间件
app.use(express.static(path.join(__dirname, '/public')))


app.use(recordMiddleware)

// 防盗链中间件
app.use((res, req) => {

})




// 路由

app.get('/login', checkRouteMiddleware, (req, res) => {
    res.send("login")
})

app.listen("3000", () => {
    console.log("服务器启动了在3000端口");
})



