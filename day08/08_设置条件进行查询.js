//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose');

//设置 strictQuery 为 true
mongoose.set('strictQuery', true);

//3. 连接 mongodb 服务                        数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once('open', async () => {
    //5. 创建文档的结构对象
    //设置集合中文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean
    });

    //6. 创建模型对象  对文档操作的封装对象
    let BookModel = mongoose.model('novel', BookSchema);

    // 根据条件获取 $lt = less than      获取价格小于20 的书籍
    // let res = await BookModel.find({ price: { $lt: 20 } })

    // 条件运算符 
    //  $gt > $lt < $gle >= $lte <= $ne !==
    // 逻辑运算符 $or || $and && 
    // 根据条件获取 $gt = 大于 more than      获取价格大于20 的书籍
    // let res = await BookModel.find({ price: { $gt: 20 } })

    //价格大于等于30 小于60
    // let res = await BookModel.find({ $and: [{ price: { $gte: 30 } }, { price: { $lt: 50 } }] })

    // 正则表达式
    let res = await BookModel.find({ name: new RegExp('三') })
    console.log(res);



    mongoose.disconnect()
})




// 设置连接错误的回调
mongoose.connection.on('error', () => {
    console.log('连接失败');
});

//设置连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭');
});

