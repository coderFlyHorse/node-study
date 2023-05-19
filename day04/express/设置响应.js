
const express = require("express")

const app = express()
// 导入json文件
app.get("/response",(req,res)=>{
    // 原生的
    // res.statusCode = 404
    // res.statusMessage =  "love"
    // res.setHeader("xxx","yyy")
    // res.write("Hello, world!")
    
    // express
    // res.status(500)
    // res.set("aaa","bbb")
    // 返回没有乱码，自动添加响应头和编码格式
    // res.set("aaa","bbb")

    res.status(500).set("aaa","bbb")
    res.send("你好 EXPRESS")
})

// 启动服务器
// 监听端口
app.listen("3000", () => {
    console.log("服务启动成功在3000 端口");
})
