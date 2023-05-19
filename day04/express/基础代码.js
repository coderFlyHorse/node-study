
const express = require("express")


const app = express()

app.get('/home', (req, res) => {
    res.end("Hello Express")


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
