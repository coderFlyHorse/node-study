const fs = require('fs')
// 全局中间件  服务器访问日志
function recordMiddleware(req, res, next) {
    let { url, ip } = req
    console.log(url, ip);
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip} \r\n`)
    next()
}
// 路由中间件
function checkRouteMiddleware(req, res, next) {
    if (req.query.code == '521') {
        next()
    } else {
        res.send("请求错误")
    }
}
module.exports = {
    recordMiddleware,
    checkRouteMiddleware
}