/**
 * 
 * @param {*} success 数据库连接成功的回调
 * @param {*} error 数据路连接失败的回调
 */

// success 数据库连接成功的函数 error函数
module.exports = function (success, error) {
    // 错误冗余处理
    if (typeof error !== 'function') {
        error = () => {
            console.log('连接失败')
        }
    }
    const mongoose = require("mongoose")

    //设置 strictQuery 为 true
    mongoose.set('strictQuery', true);
    const { DBHOOST, DBPORT, DBNAME } = require('../config/config')
    //                           协议     IP      端口    名称
    mongoose.connect(`mongodb://${DBHOOST}:${DBPORT}/${DBNAME}`)
    // 连接成功后回调 on once(事件回调函数只执行一次)
    mongoose.connection.once("open", () => {
        success()
    })
    // 连接错误后回调
    mongoose.connection.once("error", () => {
        error()
    })
    // 连接关闭后回调
    mongoose.connection.on("close", () => {
        console.log("连接关闭");
    })

}