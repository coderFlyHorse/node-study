// Buffer 和 字符串转换

const buffer4 = Buffer.from([105,108,111,118,101,121,111,117])

console.log(buffer4.toString());

// 溢出
let buff = Buffer.from('hello')
buff[0] = 361
// 中文