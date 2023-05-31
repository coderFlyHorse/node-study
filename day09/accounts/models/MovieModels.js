// 创建MovieModel
const mongoose = require("mongoose")
// 确定表字段
let MovieSchema = new mongoose.Schema({
    title: String,
    director: String,
})
//  对文档进行操作的封装对象
let MovieModel = mongoose.model('movie', MovieSchema)

module.exports = MovieModel