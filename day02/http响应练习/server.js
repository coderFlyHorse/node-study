
const http = require('http')
const path = require('path')
const fs = require('fs')
const readPath = path.resolve(__dirname, "test.html")
function logError(err) {
    console.log(err);
}
function readFile(path, callback) {
    let file = fs.readFileSync(path, (err, data) => {
        if (err) {
            callback(err, "读取失败")
            return
        }

        return data
    })


    return file
}

// request 请求 response 响应
const server = http.createServer((request, response) => {
    let { method } = request
    let { pathname } = new URL(request.url, "http://localhost")


    // 设置响应体 以及 告诉浏览器 解码的格式
    response.setHeader("content-type", "text/html; charset=utf-8");



    response.end(readFile(readPath, logError))

})
// http  的默认端口是80 https的默认端口是443
server.listen(9000, () => {
    console.log("服务已经启动");
})