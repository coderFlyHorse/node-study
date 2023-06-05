
const jwt = require('jsonwebtoken')
const { secret } = require('../config/config')
module.exports = (req, res, next) => {
    let token = req.get('token')

    if (!token) {
        return res.json({ code: '1002', msg: 'token 缺失', data: null })
    }
    jwt.verify(token, secret, (err, data) => {
        if (err) {
            return res.json({ code: "2004", msg: 'token 校验失败', data: null })
        }
        console.log(data,'登录者的身份信息')

        // 保存用户信息。token进数据库
        req.user = data
        next()

    })

}