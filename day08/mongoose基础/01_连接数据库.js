const mongoose = require("mongoose")
                            // 协议     IP      端口    名称
mongoose.connect("mongodb://127.0.0.1:27017/bilibili")
// 连接成功后回调 on once(事件回调函数只执行一次)
mongoose.connection.once("open",()=>{
 console.log("连接成功");
})
// 连接错误后回调
mongoose.connection.once("error",()=>{
 console.log("连接失败");
})
// 连接关闭后回调
mongoose.connection.on("close",()=>{
    console.log("连接关闭");
})

// 关闭

setTimeout(() => {
    mongoose.disconnect()
}, 2000);