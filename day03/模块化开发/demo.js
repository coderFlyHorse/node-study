// 声明一个函数

function tiemo() {
    console.log("贴膜 ...");
}
function niejiao() {
    console.log("捏脚 。。。");
}
// module.exports 可以暴露任何数据
// module.exports = {tiemo,niejiao}

// exports.value 不能暴露 ·exports = value· 的数据
exports.niejiao = niejiao
exports.tiemo = tiemo

// exports = module.exports = {}