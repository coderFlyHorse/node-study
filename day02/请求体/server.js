
const http = require('http')
// request 请求 response 响应
const server = http.createServer((request, response) => {

    // 设置响应体 以及 告诉浏览器 解码的格式
    response.setHeader("content-type", "text/html; charset=utf-8");


    let body = ""
    request.on("data", chunk => {
        body += chunk
    })
    request.on("end", () => {
           
        console.log(body );
        response.end("你好 HTTP Server")
    })

})
// http  的默认端口是80 https的默认端口是443
server.listen(9000, () => {
    console.log("服务已经启动");
})