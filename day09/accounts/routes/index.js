var express = require('express');
var router = express.Router();

const AccountModel = require('../models/AccountModel')
const moment = require('moment')
/* GET home page. */
router.get('/account', async function (req, res, next) {

  let accounts = await AccountModel.find().sort({ time: -1 })
  res.render("list", { accounts, moment });
});
// 
router.get('/account/create', function (req, res, next) {
  res.render("create");
});

// 新增记录
router.post('/account', async function (req, res, next) {
  // 处理日期数据
  let result = await AccountModel.create({ ...req.body, time: moment(req.body.time).toDate() })


  if (!result) {
    res.status(500).send('插入失败~~~')
    return
  }
  res.render("success", { msg: "添加成功", url: "/account" });
});

router.get("/account/:id", async (req, res) => {
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
