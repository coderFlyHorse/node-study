// 安装导入ejs
const ejs = require('ejs');

const fs = require('fs')

// 赋值
let china = "中国"
let weather = "不要在下雨的时候修房子"
let str = fs.readFileSync('./public/index.html').toString()
// <%= china  %> ejs 模板语法
let result = ejs.render(str,{china,weather})

console.log(result);