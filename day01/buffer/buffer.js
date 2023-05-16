// 缓冲区，一段固定长度的内存空间
const buffer1 = Buffer.alloc(10)
const buffer2 = Buffer.allocUnsafe(1000)

const buffer3 = Buffer.from("Hello world!")
console.log(buffer3)