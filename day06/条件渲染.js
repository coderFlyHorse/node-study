// 安装导入ejs
const ejs = require('ejs');

const fs = require('fs')

// 数组

let isLogin = false
// <%= china  %> ejs 模板语法
// if (isLogin) {
//     console.log("<span>欢迎回来</span>");
// } else { console.log(""); }
let html = fs.readFileSync('./public/条件渲染.html').toString()
console.log(html);
let result = ejs.render(html, { isLogin })

console.log(result);