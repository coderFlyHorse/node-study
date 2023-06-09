var express = require('express');
var router = express.Router();
const low = require('lowdb')
const shortid = require('shortid')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)
/* GET home page. */
router.get('/account', function (req, res, next) {
  let accounts = db.get('accounts').value()
  res.render("list", { accounts });
});
// 
router.get('/account/create', function (req, res, next) {
  res.render("create");
});
router.post('/account', function (req, res, next) {
  console.log(req.body);
  let id = shortid.generate()
  db.get("accounts").unshift({ id: id, ...req.body }).write()
  res.render("success", { msg: "添加成功", url: "/account" });
});

router.get("/account/:id", (req, res) => {
  let id = req.params.id;
  // 删除
  db.get("accounts").remove({ id }).write()
  res.render("success",{msg:"删除成功", url: "/account"})
})

module.exports = router;
