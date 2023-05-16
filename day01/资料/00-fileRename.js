

const fs = require('fs'); // file System
const path = require('path');
const readDirPath = path.resolve(__dirname)
function logError(err) {
    console.log(err);
}
function readDir(path, callback) {
    let fileList = fs.readdirSync(path, (err, data) => {
        if (err) {
            callback(err)
            return
        }

        return data

    })
    return fileList
}
let fileList = readDir(readDirPath, logError)

fileList.forEach((file,index) => {
    let filePath = path.resolve(__dirname, file)
    let fileToPath = path.resolve(__dirname,'../资料', `0${index}-${file}`)
    reFileName(filePath,fileToPath)
})

function reFileName(renamePath, renameToPath) {
    if (!renamePath) return
    fs.rename(renamePath, renameToPath, (err) => {
        if (err) {
            console.log("修改失败");
            return
        }
        console.log("修改成功");
    })
}