var express = require('express');
var router = express.Router();
const formidable = require('formidable');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
/* 表单模板 */
router.get('/portrait', function (req, res, next) {
  res.render('portrait');
});
/* 表单 */
router.post('/portrait', function (req, res, next) {
  const form = formidable({ multiples: true, uploadDir: __dirname + '/../public/images',keepExtensions:true });
  //  解析请求报文
  form.parse(req, (err, fields, files) => {

    if (err) {
      next(err);
      return;
    }
    let url = '/images/'+files.portrait.newFilename  //此数据保存在数据库中
    res.send(url)
  });

});

module.exports = router;
