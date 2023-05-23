const express = require('express');

const router = express.Router()

// 创建路由规则

router.get('/admin', (req, res) => {
    res.send("后台首页")
})


// 暴露router
module.exports = router