
const http = require('http')

const fs = require('fs')




// request 请求 response 响应
const server = http.createServer((request, response) => {
    let { pathname } = new URL(request.url, "http://localhost")
    // 设置响应体 以及 告诉浏览器 解码的格式
    function readFile(path) {
        let file = fs.readFile(path, (err, data) => {
            if (err) {
                response.end(err, "读取失败")
                return
            }
            return data
        })
        return file
    }
    console.log(pathname);

    let filePath = __dirname + '/page' + pathname
    console.log(filePath);
    response.end(readFile(filePath))
})
// http  的默认端口是80 https的默认端口是443
server.listen(9000, () => {
    console.log("服务已经启动");
})