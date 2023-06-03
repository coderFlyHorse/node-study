const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
app.get('/set-cookie', (req, res) => {
    // 浏览器登录后销毁 maxAge  最大生命周期
    res.cookie('name', 'list', { maxAge: 60 * 1000 })
    res.cookie('theme', 'blue',)
    res.send('home')
})
// 删除cookies
app.get('/remove-cookie', (req, res) => {
    // 浏览器登录后销毁 maxAge  最大生命周期
    res.clearCookie('theme')
    res.send('删除成功')
})
// 获取cookies
app.get('/get-cookie', (req, res) => {
    // 浏览器登录后销毁 maxAge  最大生命周期
    console.log(req.cookies)
    res.send('获取cookies')
})
app.listen('3000')