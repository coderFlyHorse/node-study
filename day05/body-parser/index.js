//  body-parser 获取请求体里面的参数
const express = require("express");
const fs = require("fs");
const path = require("path");
//获取url参数
const bodyParser = require('body-parser')
// Json格式的请求体中间件
const jsonParser = bodyParser.json()
// 解析json格式的中间件
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app
const app = express();


app.use(express.static(__dirname + './public'))
// 静态资源中间


app.use(recordMiddleware)

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/form.html")
})

// app.get("/login", urlencodedParser, (req, res) => {
//     console.log(req.query.username);
//     console.log(req.query.password);
//     console.log("登录接口");
//     // post 请求的参数才会存放在 请求体中
//     console.log(req.body.username, req.body.password);
//     res.send("登陆成功")
// })
app.post("/login", urlencodedParser, (req, res) => {

    console.log("登录接口");
    // post 请求的参数才会存放在 请求体中
    console.log(req.body.username, req.body.password);
    res.send("登陆成功")
})


app.listen("3000", () => {
    console.log("服务启动成功在3000 端口");
})