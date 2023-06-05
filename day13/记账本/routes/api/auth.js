var express = require('express');
var router = express.Router();
const md5 = require('md5');
const UserModel = require('../../models/UserModel')
const jwt = require('jsonwebtoken')
const {secret} = require('../../config/config')
router.get('/login', async (req, res, next) => {
    res.render("auth/login");
});
router.post('/login', async (req, res, next) => {

    try {
        let {username,password} = req.body
        // 非空判断
        if(!username||!password){
            res.json({code:'1001',msg:"用户名或密码错误",data:null})
            return   
        }
 
        let result = await UserModel.findOne({ username: username, password: md5(password) })
        if(!result){
            res.json({code:'1001',msg:"用户名或密码错误",data:null})
            return
        }
    
        let token = jwt.sign({username:result.username,_id:result._id},secret,{expiresIn:60*60*24*7})

        res.json( { code:'0000',msg: '登陆成功', data:token });
    } catch (err) { res.json({code:'1001',msg:"登陆失败",data:null}); }



});
// 退出登录
router.post('/logout',async (req, res) => {
    req.session.destroy(() => {
        res.render('success',{msg:'退出成功',url:'/login'})
    })
})
module.exports = router;
