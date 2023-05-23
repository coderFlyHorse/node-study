
const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express()
// 静态资源中间件设置
app.use(express.static(__dirname + './public'))
// 全局中间件  服务器访问日志
function recordMiddleware(req, res, next) {
    let { url, ip } = req
    console.log(url, ip);
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip} \r\n`)
    next()
}

app.use(recordMiddleware)
// 路由中间件
function checkRouteMiddleware(req, res, next) {
    if (req.query.code == '521') {
        next()
    } else {
        res.send("请求错误")
    }
}

app.get('/home', (req, res) => {
    // 获取url和ip地址
    res.send("Hello Home")
})
app.get('/admin', checkRouteMiddleware, (req, res) => {
    // 判断参数是否带了521
    if (req.query.code == "521") {
        res.send("Hello Admin")
    } else {
        res.send("请求错误")
    }
})
app.get('/setting', checkRouteMiddleware, (req, res) => {

    res.send("Hello Setting")
})

app.all('*', (req, res) => {
    res.send("<h1>404 Not Found</h1> ")

})
// 路由 决定应用程序如何响应客户端对特定端点的请求

// 启动服务器
// 监听端口
app.listen("3000", () => {
    console.log("服务启动成功在3000 端口");
})
