const jwt = require('jsonwebtoken')

let token = jwt.sign({username:'zhangsan'},'bilibili',{expiresIn:60*60*24*7}) //用户数据 加密字符串 配置对象 expiresIn 秒

jwt.verify(token,'bilibili',(err,data)=>{
    if(err){
        console.log('token已经过期')
        return
    }
    console.log(data)
})
