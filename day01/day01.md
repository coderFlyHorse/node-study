Day01
入门 BUffer 和计算机基础
入门
 在node 中没有 BOM 和 DOM ,可以用setTimEOuT等API
 在node中没有window对象，但是有一个global对象可以拿到全局变量和API
Buffer
// 缓冲区，一段固定长度的内存空间
const buffer1 = Buffer.alloc(10)
const buffer2 = Buffer.allocUnsafe(1000)

const buffer3 = Buffer.from("Hello world!")
console.log(buffer3)


进程与线程
1、进程
进程是程序执行的一段过程，是程序执行任务的最小单位
2、线程
线程是进程执行过程中的执行流


fs 模块



