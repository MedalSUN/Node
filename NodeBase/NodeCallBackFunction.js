/** 
 *  Node.js的回调函数
 *        异步和同步的区别
 *      1: 同步： 一个接一个去完成，前一个，没完成，后一个也被堵住
 *      2: 异步： 核心是事件驱动编程，将传统的“请求相应”思路转换成“事件驱动”思路
 *               ==这是一个软件编程思维的转变
 * 
 *   注意： 异步编程是依托于回调来实现的，但是不能说明使用回调之后就异步化了！！！
 *       回调函数在任务完成之后就会被触发调用，Node使用大量的回调函数，Node所有的API都支持回调函数
 * 
 * 
 *    回调函数一般作为函数的最后一个参数出现
 *    function test1(参数1，参数2， callback){}
 * 
 *    注意： 回调函数中的第一个参数一般都是error，第二个参数是返回成功的data
 * 
 *    阻塞是按照顺序执行的，而非阻塞是不需要按照顺序的，因此如果需要处理回调函数的参数，
 *    就需要卸载回调函数内
 * 
 * */




 /*
    使用读取文件的I/O操作来解释阻塞代码和非阻塞代码
    
    node中的fs模块用于对系统文件以及目录进行读写操作  模块中的所有的方法都有同步和异步两种形式！！！

    readFileSync和readFile的区别
    1: readFileSync  同步读取
    2: readFile  异步读取
 
 */


 // 阻塞代码  使用readFileSync方法，实现同步调用
// var fs = require("fs");

// var data = fs.readFileSync('input.text')

// console.log(data.toString());                     // 先执行读取文件信息，先执行完， 阻塞下边的代码
// console.log('程序执行结束，阻塞代码实例运行完成');      // 后开启，后执行完输出字符串


// 非阻塞代码  使用readFile方法，实现异步回调
var fs = require("fs");

fs.readFile('input.text', (error, data) => {
    if(error){
        console.log(error);
    }else{
        console.log(data.toString());                 // 先开启，后执行完  没有阻塞下边的console
    }
});

console.log('程序执行结束，非阻塞代码实例运行完成');        // 后开启，先执行完，没有等前面读取文件



