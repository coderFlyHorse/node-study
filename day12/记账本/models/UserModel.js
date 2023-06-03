const mongoose = require("mongoose")
// 确定表字段
let UserSchema = new mongoose.Schema({
   
    username: { type: String, required: true },
    password: { type: String, required: true },

})
//  对文档进行操作的封装对象
let UserModel = mongoose.model('Users', UserSchema)

module.exports = UserModel