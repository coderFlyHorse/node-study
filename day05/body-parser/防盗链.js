//  body-parser 获取请求体里面的参数
const express = require("express");


// app
const app = express();

// 防盗链中间件   防止外部网站盗用本站资源
app.use((req, res, next) => {
    // 检测请求头中的referer
    let referer = req.get("referer")
    console.log(referer);
    if (referer) {
        let url = new URL(referer)
        let hostname = url.hostname

        console.log(hostname);
        if (hostname != '127.0.0.1') {
            res.status(404).send("<h1>404 Not Found</h1>");
            return
        }
    }
    next();

})

// 静态资源中间件
app.use(express.static(__dirname + '/public'))
app.listen("3000", () => {
    console.log("服务启动成功在3000 端口");
})