const express = require('express');

const router = express.Router()

// 创建路由规则

router.get('/home', (req, res) => {
    res.send("home")
})
router.get('/search', (req, res) => {
    res.send("search")
})

// 暴露router
module.exports = router