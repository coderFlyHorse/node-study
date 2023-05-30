const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const shortid = require('shortid')
const adapter = new FileSync('db.json')
const db = low(adapter)

// 初始化
db.defaults({ posts: [], user: {} }).write()

// 写入数据
// db.get('posts')
//   .push({ id: 3, title: '今天天气还不错' })
//   .write()
// 获取单条数据
console.log(db.get('posts').find({id:1}).value());
db.get('posts').find({id:1}).value()
// 更新数据
db.get('posts').find({id:1}).assign({title:"今天下雨了"})
console.log(db.get('posts').value());
// 删除数据
db.get('posts').remove({id:3}).write();
// 更新数据
db.set('user.name', 'typicode')
  .write()