/**
 *  Node.js是单线程应用程序  由于V8引擎提供的异步执行回调接口，
 *  通过这些接口可以处理大量的并发，所以性能非常的高
 * 
 *  Node.js基本上所有的事件机制都是用设计模式中    观察者模式   实现的
 *   Node.js单线程类似进入一个While（true）的事件循环，一直到没有事件观察者退出
 *  每一个异步事件都会生成一个事件观察者，如果有事件发生就调用该回调函数
 * 
 * 
 */


 // node事件循环
/*

 // 1:引入events模块
 var events = require('events');        
 // 2:创建eventEmitter对象， 使用对象的方法
 var eventEmitter = new events.EventEmitter();
 // 3:绑定事件  监听事件的前提就是将事件绑定
 // 第一个参数是事件名称（字符串的形式），第二个参数是事件的处理程序
 eventEmitter.on('eventName',eventHandler); 
 // 4：触发事件 字符串形式的事件名称
 eventEmitter.emit('eventName')

 */


 // 实例：

var events = require('events');
var eventEmitter = new events.EventEmitter();

// 创建一个事件处理程序 connectHandler
var connectHandler = function connected () {
    console.log('连接成功，准备发射')

    //触发发射事件
    eventEmitter.emit('send');
}

// 创建一个事件处理程序，sendHandler
sendHandler = () => {
    console.log('发射成功')
}

// 绑定两个事件
eventEmitter.on('connect', connectHandler);
eventEmitter.on('send', sendHandler);

// 触发事件
eventEmitter.emit('connect');

console.log('事件循环已完成')








