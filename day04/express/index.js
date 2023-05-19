
const express = require("express")
const { singers } = require("./data/singer.json")
console.log(singers);
const app = express()
// 导入json文件
app.post('/login', (req, res) => {
    // 原生操作
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);

    // 请求路径和请求参数
    console.log(req.path);
    console.log(req.query);
    // 请求的ip地址
    console.log(req.ip);
    res.end("Hello Express1")

})
app.get('/home', (req, res) => {
    res.end("Hello Express")


})
// 路由参数,获取了路由参数
app.get("/:id.html", (req, res) => {
    console.log("路由参数", req.params.id);
    res.end("路由参数")
})
// 路由参数,获取了路由参数
app.get("/singer/:id.html", (req, res) => {

    let { id } = req.params
    console.log(id);
    // 在数组中寻找对应的数据
    let result = singers.find((item) => {
        if (item.id == Number(id) ) {
            return item
        }
    })
    if(!result){
       res.end("404 Not Found")
    }
    console.log(result);
    res.end(JSON.stringify(result) )
})


app.all('/test', (req, res) => {
    res.end("TEST")

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
