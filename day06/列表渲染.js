// 安装导入ejs
const ejs = require('ejs');

const fs = require('fs')

// 数组

let arr = ['甘雨','刻晴',"凝光"];

let html = fs.readFileSync('./public/原神.html').toString()
// <%= china  %> ejs 模板语法
let result = ejs.render(html,{arr})

console.log(result);