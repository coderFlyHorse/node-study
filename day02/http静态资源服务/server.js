
const http = require('http')

const fs = require('fs');

const path = require('path')

const mimeTypes = {
    "html": "text/html",
    "css": "text/css",
    "js": "text/javascript",
    "json": "application/json",
    "png": "image/png",
    "jpg": "image/jpeg",
    "gif": "image/gif"
};

// GEI 请求/index.html  响应 /page/index.html

// request 请求 response 响应
const server = http.createServer((request, response) => {
    let { pathname } = new URL(request.url, "http://127.0.0.1")

    if(request.method !== "GET"){
      response.statusCode = 405 //
      response.end("<h1>405 METHOD NOT ALLOWED</h1>")
      return
    }
    let root = __dirname + '/page'
    // 设置响应体 以及 告诉浏览器 解码的格式
    let filePath = root + pathname
    
    console.log(filePath);
     fs.readFile(filePath, (err, data) => {
        if (err) {
            response.setHeader('Content-Type', 'text/html;charset=utf-8')
            switch (err.code) {
                case "ENOENT":
                    response.statusCode = 404
                    response.end("<h1>404 NOT FOUND</h1>")
                    break;
                case "EPERM":
                    response.statusCode = 403
                    response.end("<h1>403 Forbidden</h1>")
                    break;
            
                default:
                    response.statusCode = 500
                    response.end("<h1>INTERNAL SERVER ERROR</h1>")
                    break;
            }

   
 
            return
        }

        let ext = path.extname(filePath).slice(1)
        let type = mimeTypes[ext]
        if (type) {
            if (ext == "html") {
                response.setHeader('Content-Type', type + ';charset=utf-8')
            }else{
                response.setHeader('Content-Type', type )
            }
        }
        else { response.setHeader('Content-Type', 'application/octet-stream') }
        console.log(ext);

        response.end(data)
    })



})
// http  的默认端口是80 https的默认端口是443
server.listen(9001, () => {
    console.log("服务已经启动");
})


// GET POST 的区别
// GET主要是用来获取数据，POST主要是用来修改书
// GET 的请求的参数是拼接在Url后的，POST 是放在请求体里面的
// GET 的请求有大小2k的限制，POST没有大小限制
// post 相对 get 安全一些