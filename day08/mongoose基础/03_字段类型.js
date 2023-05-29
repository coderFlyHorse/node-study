const mongoose = require("mongoose")
// 协议     IP      端口    名称
mongoose.connect("mongodb://127.0.0.1:27017/bilibili")
// 连接成功后回调 on once(事件回调函数只执行一次)
mongoose.connection.once("open", () => {
    console.log("连接成功");
    //  创建文档的结构对象
    // 确定表字段
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean,
        date: Date,
        arr: Array,
        test:mongoose.Schema.Types.Mixed, // 任意类型
        id:mongoose.Schema.Types.ObjectId,  // 文档iD
        number:mongoose.Schema.Types.Decimal128 // 高精度类型
    })
    //  对文档进行操作的封装对象
    let BookModel = mongoose.model('books', BookSchema)

    // 调用方法
    BookModel.create({ name: "失业", author: "易建刚", price: 19, is_hot: true, date: new Date(), arr: [1, 2, 3] }).then((err, data) => {

        if (err) {
            console.log(err);
            return
        }

        // 成功 data为插入的文档对象
        console.log(data);
        // 项目中不会添加此代码
        // mongoose.disconnect();

    })



})
// 连接错误后回调
mongoose.connection.once("error", () => {
    console.log("连接失败");
})
// 连接关闭后回调
mongoose.connection.on("close", () => {
    console.log("连接关闭");
})

// 关闭

// setTimeout(() => {
//     mongoose.disconnect()
// }, 2000);