var express = require('express');
var router = express.Router();
const md5 = require('md5');
const UserModel = require('../../models/UserModel')

router.get('/reg', async (req, res, next) => {
    res.render("auth/reg");
});


router.post('/reg', async (req, res) => {
    let { username, password } = req.body
    // 必填 
    try {
        let fidResult = await UserModel.findOne({ username: username })
        if (fidResult) {
            res.json({ code: '500', msg: '注册失败,用户名已存在' })
            return
        }
        // 不能重复注册
        let result = await UserModel.create({ username, password: md5(password) })
        console.log(result)
        res.render("success", { msg: '注册成功', url: '/login' });
    } catch (err) {
        res.json({ code: '1001', msg: '注册失败' })
    }


});
router.get('/login', async (req, res, next) => {
    res.render("auth/login");
});
router.post('/login', async (req, res, next) => {

    try {
        let { username,_id } = await UserModel.findOne({ username: req.body.username, password: md5(req.body.password) })

        req.session.username = username   
        req.session._id = _id   
        res.render("success", { msg: '登陆成功', url: '/account' });
    } catch (err) { res.send("登陆失败"); }



});
// 退出登录
router.post('/logout',async (req, res) => {
    req.session.destroy(() => {
        res.render('success',{msg:'退出成功',url:'/login'})
    })
})
module.exports = router;
