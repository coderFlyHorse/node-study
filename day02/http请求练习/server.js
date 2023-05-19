
const http = require('http')
// request 请求 response 响应
const server = http.createServer((request, response) => {
    let { method } = request
    let { pathname } = new URL(request.url, "http://localhost")

    console.log(method, pathname);
    // 设置响应体 以及 告诉浏览器 解码的格式
    response.setHeader("content-type", "text/html; charset=utf-8");
    //  response.statusCode  响应状态码
    // response.statusMessage 响应行行信息
    //    设置多个响应头
    response.setHeader("a", [1, 2, 3, 4])
    if (method == "GET" && pathname == "/login") {
        response.end("登录接口")
    } else if (method == "GET" && pathname == "/register") {

        response.end("注册接口")
    } else {
        response.end("NOT FOUND")
    }






})
// http  的默认端口是80 https的默认端口是443
server.listen(9000, () => {
    console.log("服务已经启动");
})