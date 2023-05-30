const db = require('./db/db')
const MovieModel = require('./models/MovieModels')
db(() => {
    createMovieCollection()
    console.log("连接成功");
}, () => { console.log("连接失败"); })

async function createMovieCollection() {


    // 调用方法
    let res = await MovieModel.create({ title: "姜文", director: "让子弹飞", price: 19 })

    if (!res) {
        console.log(res);
        return
    }

    // 成功 data为插入的文档对象
    console.log(res);
    // 项目中不会添加此代码
    // mongoose.disconnect()
}