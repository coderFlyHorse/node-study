const path = require('path');
// path.resolve
// path.join
// path.parse //路径解析
// path.sep //路径分隔符
// path.basename 文件名
// path.dirname  文件夹名
// path.dirname  文件夹名
// path.extname  扩展名
let str =__filename
console.log(path.dirname(str));
console.log(path.basename(str));
console.log(path.extname(str));



console.log(path.parse(str));

// basename 文件名 dirname 文件夹名 extname 扩展名
//  __dirname 文件夹的路径 __filename 文件路径 