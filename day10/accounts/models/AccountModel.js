const mongoose = require("mongoose")
// 确定表字段
let AccountSchema = new mongoose.Schema({
    title: { type: String, required: true },
    time: Date,
    type: { type: Number, default: -1 },
    account: { type: Number, required: true },
    remarks: { type: String },
})
//  对文档进行操作的封装对象
let AccountModel = mongoose.model('Accounts', AccountSchema)

module.exports = AccountModel