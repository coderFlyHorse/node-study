
const db = require('./db/db')
const BookModel = require('./models/BookModels')
db(() => {
    createBookCollection()
    console.log("连接成功");
}, () => {
    console.log("连接失败");
})

async function createBookCollection() {


    // 调用方法
    let res = await BookModel.create({ name: "恭喜发财", author: "红包拿来", price: 19 })

    if (!res) {
        console.log(res);
        return
    }

    // 成功 data为插入的文档对象
    console.log(res);
    // 项目中不会添加此代码
    // mongoose.disconnect()
}

