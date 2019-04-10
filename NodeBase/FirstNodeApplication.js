/*

    第一个Node服务器

  使用Node.js时，不仅仅是在实现一个应用，还实现了整个HTTP服务器
  事实上，web应用以及相对应的web服务器基本上是一样的

    一个Node.js模块应用的组成部分
    1:引入required模块：我们可以使用require指令来载入Node.js模块
    2:创建服务器： 创建服务器可以用来监听客户端的请求，类似http服务器
    3:接受请求和响应请求
        客户端使用浏览器或者终端发送http请求，服务器接受请求后返回响应数据；

*/



// 第一步：引入相应的模块
var http = require('http');

// 第二步：使用createServer创建服务器
http.createServer(function(request,response){
    /*
        1:writeHead 设定请求头：向请求的客户端发送响应头；
        2:最多只能调用一次，若不调用就会自动生成一个请求头
        3: 200: status http状态码； Content-Type：相应头的属性
            charset=utf-8  注意在请求头属性配置中必须要设置字符类型，否则会出现乱码
    */
    response.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'});

    /*
        end方法，区分send方法
        1:如果服务端没有数据返回，就可以使用end
        2:服务器有数据返回使用send
    */
    response.end('你好，世界；这是我第一个web服务器程序');
}).listen(8080)  
/*
    createServer创建了一个server对象，对象有一个listen方法，用来监听相应的端口，
    指定这个HTTP服务监听的端口号
*/


/*
    使用node命令在控制台运行当前文件时，输出这一句，也表示createServer已经成功
    再浏览器上输入相应的网址就会看到response.end的语句；
    127.0.0.1就是localhost
*/
console.log('Server running at http://127.0.0.1:8080/')






