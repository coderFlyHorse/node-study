
const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express()

app.get('/home', (req, res) => {
    // 获取url和ip地址
    let { url, ip } = req
    console.log(url,ip);
    fs.appendFileSync(path.resolve(__dirname,'./access.log',`${url} ${ip}`),)
    res.end("Hello Home")


})
app.get('/admin', (req, res) => {
    res.end("Hello Admin")


})

app.all('*', (req, res) => {
    res.end("<h1>404 Not Found</h1> ")

})
// 路由 决定应用程序如何响应客户端对特定端点的请求

// 启动服务器
// 监听端口
app.listen("3000", () => {
    console.log("服务启动成功在3000 端口");
})
