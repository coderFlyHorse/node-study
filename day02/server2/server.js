const http = require('http')
// request 请求 response 响应
const server = http.createServer((request, response) => {
    //   请求方法
      console.log(request.method);
    //   请求url
      console.log(request.url);
    //   请求 协议版本号
      console.log(request.httpVersion);
    //   请求头
      console.log(request.headers);

    // 设置响应体 以及 告诉浏览器 解码的格式
    response.setHeader("content-type", "text/html; charset=utf-8");
    response.end("你好 HTTP Server")
})
// http  的默认端口是80 https的默认端口是443
server.listen(9000, () => {
    console.log("服务已经启动");
})