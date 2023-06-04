const mongoose = require("mongoose")
// 确定表字段
let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
})
//  对文档进行操作的封装对象
let BookModel = mongoose.model('books', BookSchema)

module.exports = BookModel