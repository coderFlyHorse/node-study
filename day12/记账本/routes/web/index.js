var express = require('express');


const AccountModel = require('../../models/AccountModel')
const moment = require('moment')
const checkIsLoginMiddleware = require('../../middlewares/checkLogin')

var router = express.Router();
// 首页
router.get('/', checkIsLoginMiddleware, async function (req, res, next) {

  res.redirect('/account')

});
/* GET home page. */
router.get('/account', checkIsLoginMiddleware, async function (req, res, next) {


  let accounts = await AccountModel.find().sort({ time: -1 })
  res.render("list", { accounts, moment });
});
// 
router.get('/account/create', checkIsLoginMiddleware, function (req, res, next) {
  res.render("create");
});

// 新增记录
router.post('/account', checkIsLoginMiddleware, async function (req, res, next) {
  // 处理日期数据
  let result = await AccountModel.create({ ...req.body, time: moment(req.body.time).toDate() })


  if (!result) {
    res.status(500).send('插入失败~~~')
    return
  }
  res.render("success", { msg: "添加成功", url: "/account" });
});

router.get("/account/:id", checkIsLoginMiddleware, async (req, res) => {
  let id = req.params.id;
  // 删除
  // db.get("accounts").remove({ id }).write()
  let result = await AccountModel.deleteOne({ _id: id })
  if (!result) {
    res.status(500).send('删除失败')
  }
  res.render("success", { msg: "删除成功", url: "/account" })
})

module.exports = router;
