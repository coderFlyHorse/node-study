

const fs = require('fs'); // file System
const path = require('path');

let filePath = path.resolve(__dirname, "test.txt")

function logError(err) {
    console.log(err);
}
//fs 的 同步 模式 writeFileSync 没有回到函数
//fs 的 异步 模式 writeFile 
// writeFile 追加写入要加options {flag:"a"} 实现appendFile 的效果
function writeFile(filePath, data, options, callback) {
    fs.writeFile(filePath, data, options, (err) => {
        if (err) {
            callback("写入失败", err)
        }
        callback("写入成功", err)
    })
}

writeFile(filePath, "Programming Language", { flag: "a" }, logError)

// 同步与异步


// fs 模块 追加写入 fs.appendFile  异步
// fs 模块 追加写入 fs.appendFileSync 同步
function appendFile(filePath, data, callback) {
    fs.appendFile(filePath, data, (err) => {
        if (err) {
            callback("追加写入失败", err)
        }
        callback("追加写入成功", err)
    })
}
appendFile(filePath, "\rProgramming Language Append", logError)

// 流式写入 适合高频写入
let streamFilePath = path.resolve(__dirname, "stream.txt");
function writeStream(path, data, close = false) {
    const ws = fs.createWriteStream(path)
    ws.write(data)

    close && ws.close()
}


writeStream(streamFilePath, "劝君更尽一杯酒",true)



// fs 模块 读取 fs.readFile  异步
// fs 模块 读取 fs.readFileSync 同步
const readPath = path.resolve(__dirname, "stream.txt")
 function readFile(path, callback) {
    fs.readFile(path, (err, data) => {
        if (err) {
            callback(err, "读取失败")
            return
        }
        callback(data.toString() + "读取成功")
    })
}
readFile(readPath, logError)
// fs 模块 读取 fs.createReadStream  异步
// fs 模块 读取 fs.createReadStreamSync 同步
const readStreamPath = path.resolve(__dirname, "stream.txt")
function readFileStream(path) {
    const rs = fs.createReadStream(path)

    rs.on("data", chunk => {
        console.log("length", chunk.length);
    })
    rs.on("end", () => {
        console.log("读取完成");
    })

}
readFileStream(readStreamPath)
// fs 模块 复制 fs.readFile  异步
// fs 模块 复制 fs.readFileSync 同步
let copyPath = path.resolve(__dirname, "test.txt")
let toPath = path.resolve(__dirname, "test2.txt")
function copyFile(copyPath, toPath) {
    if (!copyPath) {
        return
    }
    let data = fs.readFileSync(copyPath)
    console.log(data);
    fs.writeFileSync(toPath, data)
}
let toStreamPath = path.resolve(__dirname, "test3.txt")
copyFile(copyPath, toPath)

function copyFile2(copyPath, toPath) {
    // 读
    const rs = fs.createReadStream(copyPath)
    // 写
    const ws = fs.createWriteStream(toPath)
    // 读然 的东西 写入 
    // rs.on("data", (chunk) => {
    //     ws.write(chunk)
    // })
    rs.pipe(ws)
}
copyFile2(copyPath, toStreamPath)

let renamePath = path.resolve(__dirname, "test1.txt")
let renameToPath = path.resolve(__dirname, "testRename.txt")
// 文件重命名 rename
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
let movePath = path.resolve(__dirname, "../资料/testRename.txt")
// 文件重命名
reFileName(renamePath, renameToPath)
// 移动文件
reFileName(renameToPath, movePath)

// 删除
// fs.unlink fs.rm
const deletePath = path.resolve(__dirname, "testn.txt")
function deleteFile(path, callback) {
    fs.unlink(path, err => {
        if (err) {
            callback(err)
            return
        }
        callback("删除成功")
    })
}
// deleteFile(deletePath,logError)
// 创建文件夹
// fs.mkdir params path options callback
const mkPath = path.resolve(__dirname, "files/files/files")
function makeDir(path, callback) {
    fs.mkdir(path, { recursive: true }, err => {
        if (err) {
            callback(err)
            return
        }
        callback("创建成功")
    })
}
const readDirPath = path.resolve(__dirname)
makeDir(mkPath, logError)
//读取文件夹
function readDir(path, callback) {
    fs.readdir(path, (err, data) => {
        if (err) {
            callback(err)
            return
        }
        console.log(data);

    })
}
readDir(readDirPath, logError)

// 删除文件夹
// rmdir 递归删除 
const rmPath = path.resolve(__dirname, "files")
function rmDir(path, callback) {
    fs.rm(path, { recursive: true }, err => {
        if (err) {
            callback(err)
            return
        }
        logError("文件夹删除成功");
    })
}
rmDir(rmPath, logError)

let readStatPath = path.resolve(__dirname, "stream.txt")
function readFileState(readStatPath) {
    fs.stat(readStatPath, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log( data.isFile(),data.isDirectory());

    })
}
readFileState(readStatPath)