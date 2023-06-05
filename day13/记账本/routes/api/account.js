const express = require('express');
const checkTokenMiddleware = require('../../middlewares/checkTokenMiddleware')

const jwt = require('jsonwebtoken')
const AccountModel = require('../../models/AccountModel')
const moment = require('moment')
/* GET home page. */
// 中间件
const router = express.Router();
router.get('/account', checkTokenMiddleware, async function (req, res, next) {

    try {
        // req.user 中存放了用户的{ username: 'admin', iat: 1685885579, exp: 1686490379 }
        console.log(req.user,"用户信息")
        let accounts = await AccountModel.find().sort({ time: -1 })
        res.json({ code: '0000', msg: '读取成功', data: accounts })

    }
    catch (err) {

        res.json({ code: '1001', msg: '读取失败~~', data: null })
    }
});
// 
router.get('/account/create', checkTokenMiddleware, function (req, res, next) {
    res.render("create");
});

// 新增记录
router.post('/account', checkTokenMiddleware,async function (req, res, next) {
    // 处理日期数据
    try {
        let data = await AccountModel.create({ ...req.body, time: moment(req.body.time).toDate() })
        res.json({ code: '0000', msg: '添加成功', data: data })
    }
    catch (err) {

        // 错误处理
        res.json({ code: '1001', msg: '获取失败', data: err.errors.title.properties.message })
    }


    // res.render("success", { msg: "", url: "/account" });
});

router.delete("/account/:id", checkTokenMiddleware, async (req, res) => {
    let { id } = req.params;
    // 删除
    try {
        console.log(req.user)
        let result = await AccountModel.deleteOne({ _id: id })
        console.log(result)
        if (result.deletedCount == 0) {
            res.json({
                code: "1001",
                msg: "删除失败",
                data: "数据不存在"
            })
            return
        }
        res.json({ code: "0000", msg: "成功", data: result })
    } catch (err) {
        res.json({
            code: "1001",
            msg: "删除失败",
            data: err.errors.title.properties.message
        })
    }

})
// 获取单个账单的信息
router.get("/account/:id", checkTokenMiddleware, async (req, res) => {
    let { id } = req.params;
    // 删除
    try {
        let result = await AccountModel.findById({ _id: id })
        if (result.deletedCount == 0) {
            res.json({
                code: "1001",
                msg: "删除失败",
                data: "数据不存在"
            })
            return
        }
        res.json({ code: "0000", msg: "成功", data: result })
    } catch (err) {
        res.json({
            code: "1001",
            msg: "删除失败",
            data: err.errors.title.properties.message
        })
    }

})
// 修改单个账单的信息
router.patch("/account/:id", checkTokenMiddleware, async (req, res) => {
    let { id } = req.params;
    console.log(id)
    // 删除
    try {
        // 返回的是删除成功的结果
        await AccountModel.updateOne({ _id: id }, req.body)


        // 再次查询数据库，返回修改的数据
        let result = await AccountModel.findById({ _id: id })
        console.log(result)
        res.json({ code: "0000", msg: "成功", data: result })
    } catch (err) {

        res.json({
            code: "1001",
            msg: "删除失败",
            data: err.errors.title.properties.message
        })
    }

})
module.exports = router;
