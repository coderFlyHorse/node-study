
const express = require("express")
const path = require("path")

const app = express()
// 设置模板引擎
app.set('view engine', 'ejs')
// 模板存放位置 (有模板语法内容的文件)
app.set('views',path.resolve(__dirname, './views'))
app.get('/home', (req, res) => {
    let title = "尚硅谷"
    res.render('home',{title})
    // 

})

app.all('*', (req, res) => {
    res.end("404 Not Found")

})
// 路由 决定应用程序如何响应客户端对特定端点的请求

// 启动服务器
// 监听端口
app.listen("3000", () => {
    console.log("服务启动成功在3000 端口");
})
