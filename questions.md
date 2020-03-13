<!-- TOC -->

- [电话/视频面试题目](#%e7%94%b5%e8%af%9d%e8%a7%86%e9%a2%91%e9%9d%a2%e8%af%95%e9%a2%98%e7%9b%ae)
  - [注意](#%e6%b3%a8%e6%84%8f)
  - [前端基础知识](#%e5%89%8d%e7%ab%af%e5%9f%ba%e7%a1%80%e7%9f%a5%e8%af%86)
    - [事件循环](#%e4%ba%8b%e4%bb%b6%e5%be%aa%e7%8e%af)
    - [数组](#%e6%95%b0%e7%bb%84)
    - [对象](#%e5%af%b9%e8%b1%a1)
    - [this](#this)
    - [类型](#%e7%b1%bb%e5%9e%8b)
    - [let 与 const](#let-%e4%b8%8e-const)
    - [箭头函数](#%e7%ae%ad%e5%a4%b4%e5%87%bd%e6%95%b0)
    - [Map](#map)
    - [Promise](#promise)
    - [跨域相关](#%e8%b7%a8%e5%9f%9f%e7%9b%b8%e5%85%b3)
    - [前端安全](#%e5%89%8d%e7%ab%af%e5%ae%89%e5%85%a8)
    - [DOM 相关](#dom-%e7%9b%b8%e5%85%b3)
    - [new](#new)
    - [React](#react)
    - [Redux](#redux)
    - [CSS](#css)
    - [Vue](#vue)
    - [计算机网络](#%e8%ae%a1%e7%ae%97%e6%9c%ba%e7%bd%91%e7%bb%9c)
    - [简述https原理，以及与http的区别](#%e7%ae%80%e8%bf%b0https%e5%8e%9f%e7%90%86%e4%bb%a5%e5%8f%8a%e4%b8%8ehttp%e7%9a%84%e5%8c%ba%e5%88%ab)
    - [操作系统中进程和线程怎么通信](#%e6%93%8d%e4%bd%9c%e7%b3%bb%e7%bb%9f%e4%b8%ad%e8%bf%9b%e7%a8%8b%e5%92%8c%e7%ba%bf%e7%a8%8b%e6%80%8e%e4%b9%88%e9%80%9a%e4%bf%a1)
    - [node中cluster是怎样开启多进程的，并且一个端口可以被多个进程监听吗](#node%e4%b8%adcluster%e6%98%af%e6%80%8e%e6%a0%b7%e5%bc%80%e5%90%af%e5%a4%9a%e8%bf%9b%e7%a8%8b%e7%9a%84%e5%b9%b6%e4%b8%94%e4%b8%80%e4%b8%aa%e7%ab%af%e5%8f%a3%e5%8f%af%e4%bb%a5%e8%a2%ab%e5%a4%9a%e4%b8%aa%e8%bf%9b%e7%a8%8b%e7%9b%91%e5%90%ac%e5%90%97)
    - [实现原生ajax](#%e5%ae%9e%e7%8e%b0%e5%8e%9f%e7%94%9fajax)
    - [vue-router源码](#vue-router%e6%ba%90%e7%a0%81)
    - [vue原理（手写代码，实现数据劫持）](#vue%e5%8e%9f%e7%90%86%e6%89%8b%e5%86%99%e4%bb%a3%e7%a0%81%e5%ae%9e%e7%8e%b0%e6%95%b0%e6%8d%ae%e5%8a%ab%e6%8c%81)
    - [](#)
    - [介绍一下项目中的难点](#%e4%bb%8b%e7%bb%8d%e4%b8%80%e4%b8%8b%e9%a1%b9%e7%9b%ae%e4%b8%ad%e7%9a%84%e9%9a%be%e7%82%b9)
    - [let var const 有什么区别](#let-var-const-%e6%9c%89%e4%bb%80%e4%b9%88%e5%8c%ba%e5%88%ab)
    - [你知道哪些http头部](#%e4%bd%a0%e7%9f%a5%e9%81%93%e5%93%aa%e4%ba%9bhttp%e5%a4%b4%e9%83%a8)
    - [怎么与服务端保持连接](#%e6%80%8e%e4%b9%88%e4%b8%8e%e6%9c%8d%e5%8a%a1%e7%ab%af%e4%bf%9d%e6%8c%81%e8%bf%9e%e6%8e%a5)
    - [http请求跨域问题，你都知道哪些解决跨域的方法](#http%e8%af%b7%e6%b1%82%e8%b7%a8%e5%9f%9f%e9%97%ae%e9%a2%98%e4%bd%a0%e9%83%bd%e7%9f%a5%e9%81%93%e5%93%aa%e4%ba%9b%e8%a7%a3%e5%86%b3%e8%b7%a8%e5%9f%9f%e7%9a%84%e6%96%b9%e6%b3%95)
    - [webpack怎么优化](#webpack%e6%80%8e%e4%b9%88%e4%bc%98%e5%8c%96)
    - [你了解哪些请求方法，分别有哪些作用和不同](#%e4%bd%a0%e4%ba%86%e8%a7%a3%e5%93%aa%e4%ba%9b%e8%af%b7%e6%b1%82%e6%96%b9%e6%b3%95%e5%88%86%e5%88%ab%e6%9c%89%e5%93%aa%e4%ba%9b%e4%bd%9c%e7%94%a8%e5%92%8c%e4%b8%8d%e5%90%8c)
    - [你觉得typescript和javascript有什么区别](#%e4%bd%a0%e8%a7%89%e5%be%97typescript%e5%92%8cjavascript%e6%9c%89%e4%bb%80%e4%b9%88%e5%8c%ba%e5%88%ab)
    - [typescript你都用过哪些类型](#typescript%e4%bd%a0%e9%83%bd%e7%94%a8%e8%bf%87%e5%93%aa%e4%ba%9b%e7%b1%bb%e5%9e%8b)
    - [typescript中type和interface的区别](#typescript%e4%b8%adtype%e5%92%8cinterface%e7%9a%84%e5%8c%ba%e5%88%ab)
    - [react怎么优化](#react%e6%80%8e%e4%b9%88%e4%bc%98%e5%8c%96)
    - [你了解node多进程吗](#%e4%bd%a0%e4%ba%86%e8%a7%a3node%e5%a4%9a%e8%bf%9b%e7%a8%8b%e5%90%97)
    - [node进程中怎么通信](#node%e8%bf%9b%e7%a8%8b%e4%b8%ad%e6%80%8e%e4%b9%88%e9%80%9a%e4%bf%a1)
    - [node可以开启多线程吗](#node%e5%8f%af%e4%bb%a5%e5%bc%80%e5%90%af%e5%a4%9a%e7%ba%bf%e7%a8%8b%e5%90%97)
    - [算法题：老师分饼干，每个孩子只能得到一块饼干，但每个孩子想要的饼干大小不尽相同。](#%e7%ae%97%e6%b3%95%e9%a2%98%e8%80%81%e5%b8%88%e5%88%86%e9%a5%bc%e5%b9%b2%e6%af%8f%e4%b8%aa%e5%ad%a9%e5%ad%90%e5%8f%aa%e8%83%bd%e5%be%97%e5%88%b0%e4%b8%80%e5%9d%97%e9%a5%bc%e5%b9%b2%e4%bd%86%e6%af%8f%e4%b8%aa%e5%ad%a9%e5%ad%90%e6%83%b3%e8%a6%81%e7%9a%84%e9%a5%bc%e5%b9%b2%e5%a4%a7%e5%b0%8f%e4%b8%8d%e5%b0%bd%e7%9b%b8%e5%90%8c)
    - [目标是尽量让更多的孩子满意。 如孩子的要求是 1, 3, 5, 4, 2，饼干是1, 1，](#%e7%9b%ae%e6%a0%87%e6%98%af%e5%b0%bd%e9%87%8f%e8%ae%a9%e6%9b%b4%e5%a4%9a%e7%9a%84%e5%ad%a9%e5%ad%90%e6%bb%a1%e6%84%8f-%e5%a6%82%e5%ad%a9%e5%ad%90%e7%9a%84%e8%a6%81%e6%b1%82%e6%98%af-1-3-5-4-2%e9%a5%bc%e5%b9%b2%e6%98%af1-1)
    - [最多能让1个孩子满足。如孩子的要求是 10, 9, 8, 7, 6，饼干是7, 6, 5，最多能](#%e6%9c%80%e5%a4%9a%e8%83%bd%e8%ae%a91%e4%b8%aa%e5%ad%a9%e5%ad%90%e6%bb%a1%e8%b6%b3%e5%a6%82%e5%ad%a9%e5%ad%90%e7%9a%84%e8%a6%81%e6%b1%82%e6%98%af-10-9-8-7-6%e9%a5%bc%e5%b9%b2%e6%98%af7-6-5%e6%9c%80%e5%a4%9a%e8%83%bd)
    - [让2个孩子满足。](#%e8%ae%a92%e4%b8%aa%e5%ad%a9%e5%ad%90%e6%bb%a1%e8%b6%b3)
    - [算法题：给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值;](#%e7%ae%97%e6%b3%95%e9%a2%98%e7%bb%99%e5%ae%9a%e4%b8%80%e4%b8%aa%e6%ad%a3%e6%95%b4%e6%95%b0%e6%95%b0%e5%88%97a-%e5%af%b9%e4%ba%8e%e5%85%b6%e6%af%8f%e4%b8%aa%e5%8c%ba%e9%97%b4-%e6%88%91%e4%bb%ac%e9%83%bd%e5%8f%af%e4%bb%a5%e8%ae%a1%e7%ae%97%e4%b8%80%e4%b8%aax%e5%80%bc)
    - [X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和;](#x%e5%80%bc%e7%9a%84%e5%ae%9a%e4%b9%89%e5%a6%82%e4%b8%8b-%e5%af%b9%e4%ba%8e%e4%bb%bb%e6%84%8f%e5%8c%ba%e9%97%b4-%e5%85%b6x%e5%80%bc%e7%ad%89%e4%ba%8e%e5%8c%ba%e9%97%b4%e5%86%85%e6%9c%80%e5%b0%8f%e7%9a%84%e9%82%a3%e4%b8%aa%e6%95%b0%e4%b9%98%e4%b8%8a%e5%8c%ba%e9%97%b4%e5%86%85%e6%89%80%e6%9c%89%e6%95%b0%e5%92%8c)
    - [现在需要你找出数列a的所有区间中, X值最大的那个区间;](#%e7%8e%b0%e5%9c%a8%e9%9c%80%e8%a6%81%e4%bd%a0%e6%89%be%e5%87%ba%e6%95%b0%e5%88%97a%e7%9a%84%e6%89%80%e6%9c%89%e5%8c%ba%e9%97%b4%e4%b8%ad-x%e5%80%bc%e6%9c%80%e5%a4%a7%e7%9a%84%e9%82%a3%e4%b8%aa%e5%8c%ba%e9%97%b4)
    - [如数列a为: 3 1 6 4 5 2; 则X值最大的区间为6, 4, 5, X = 4 * (6+4+5) = 60;](#%e5%a6%82%e6%95%b0%e5%88%97a%e4%b8%ba-3-1-6-4-5-2-%e5%88%99x%e5%80%bc%e6%9c%80%e5%a4%a7%e7%9a%84%e5%8c%ba%e9%97%b4%e4%b8%ba6-4-5-x--4--645--60)
    - [](#-2)
    - [算法题：两个有序链表和并成一个有序链表](#%e7%ae%97%e6%b3%95%e9%a2%98%e4%b8%a4%e4%b8%aa%e6%9c%89%e5%ba%8f%e9%93%be%e8%a1%a8%e5%92%8c%e5%b9%b6%e6%88%90%e4%b8%80%e4%b8%aa%e6%9c%89%e5%ba%8f%e9%93%be%e8%a1%a8)
    - [https与http有什么区别(一面刚好也被问到)](#https%e4%b8%8ehttp%e6%9c%89%e4%bb%80%e4%b9%88%e5%8c%ba%e5%88%ab%e4%b8%80%e9%9d%a2%e5%88%9a%e5%a5%bd%e4%b9%9f%e8%a2%ab%e9%97%ae%e5%88%b0)
    - [cookie有哪些属性](#cookie%e6%9c%89%e5%93%aa%e4%ba%9b%e5%b1%9e%e6%80%a7)
    - [cookie,session,localstorage,sessionstorage有什么区别](#cookiesessionlocalstoragesessionstorage%e6%9c%89%e4%bb%80%e4%b9%88%e5%8c%ba%e5%88%ab)
    - [怎么禁止js访问cookie](#%e6%80%8e%e4%b9%88%e7%a6%81%e6%ad%a2js%e8%ae%bf%e9%97%aecookie)
    - [position有哪些属性](#position%e6%9c%89%e5%93%aa%e4%ba%9b%e5%b1%9e%e6%80%a7)
    - [你知道哪些状态码](#%e4%bd%a0%e7%9f%a5%e9%81%93%e5%93%aa%e4%ba%9b%e7%8a%b6%e6%80%81%e7%a0%81)
    - [options请求方法有什么用](#options%e8%af%b7%e6%b1%82%e6%96%b9%e6%b3%95%e6%9c%89%e4%bb%80%e4%b9%88%e7%94%a8)
    - [less,sass它们的作用是什么](#lesssass%e5%ae%83%e4%bb%ac%e7%9a%84%e4%bd%9c%e7%94%a8%e6%98%af%e4%bb%80%e4%b9%88)
    - [平时怎么学习](#%e5%b9%b3%e6%97%b6%e6%80%8e%e4%b9%88%e5%ad%a6%e4%b9%a0)
    - [你什么时候可以来实现](#%e4%bd%a0%e4%bb%80%e4%b9%88%e6%97%b6%e5%80%99%e5%8f%af%e4%bb%a5%e6%9d%a5%e5%ae%9e%e7%8e%b0)
    - [能实习多久](#%e8%83%bd%e5%ae%9e%e4%b9%a0%e5%a4%9a%e4%b9%85)

<!-- /TOC -->

##  前端基础知识

###  事件循环

  js是单线程的，为了避免阻塞，有了事件循环，event loop。将同步任务排队到执行栈中，异步任务排队到事件队列中，事件队列分为微事件队列和宏事件队列，微事件队列就一个，宏事件队列有好多个。浏览器环境中执行方法时，先将执行栈中的任务清空，再将微任务推到执行栈中并清空，之后检查是否存在宏任务，若存在则取出一个宏任务，执行完成检查是否有微任务，以此循环。

1.  js解析方法时，将同步任务排队到执行栈中，异步任务排队到事件队列中。
2.  事件队列分为:
  宏任务：setTimeout，setInterval，setImmediate，I/O，UI交互事件
  微任务：process.nextTick，Promise.then
3.  浏览器环境中执行方法时，先将执行栈中的任务清空，再将微任务推到执行栈中并清空，之后检查是否存在宏任务，若存在则取出一个宏任务，执行完成检查是否有微任务，以此循环…
4.  Event Loop在浏览器与node环境中的区别：
  浏览器环境每次执行一个宏任务，再去检查微任务
  node会清空当前所处阶段的队列，即执行所有task，再去检查微任务

###  数组

- 如何遍历数组？(#https://juejin.im/post/5a3a59e7518825698e72376b)
    
- for 循环遍历 (效率最高)
- forEach 遍历
- for in (最慢)
- for of
- map
- reduce
- 遍历速度 for > for of > forEach >  map > for in

> map 与 forEach 有什么区别？
    map返回值是数组，forEach没有返回值,forEach不能链式使用,不能中断。
> for in 与 for of 有什么区别？ 
    for-of只遍历可迭代对象的数据;
    for-in以原始插入顺序迭代对象的可枚举属性。for-in会把继承链的对象属性都会遍历一遍,所以会更花时间.

-  如何查找数组中的某个元素？

- find 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
- findIndex 返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
-  indexOf 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
-  includes 用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false
-  ...

> find: var array1 = [5, 12, 8, 130, 44];
    var found = array1.find(function(element) {
      return element > 10;
    });
    console.log(found);
    // expected output: 12
    
> indexOf: var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
    console.log(beasts.indexOf('bison'));
    // expected output: 1

> findIndex: var array1 = [5, 12, 8, 130, 44];
    function isLargeNumber(element) {
      return element > 13;
    }
    console.log(array1.findIndex(isLargeNumber));
    // expected output: 3

> includes: var array1 = [1, 2, 3];
    console.log(array1.includes(2));
    // expected output: true

###  对象

- 如何遍历对象？

  - for...in...
  - Object.keys()

> for...in... 有什么问题，如何避免？

    > - 会遍历原型链上的属性, 可以用hasOwnProperty是否为true去判断。

> for...in... 和 Object.keys() 有什么区别?

    > - for in遍历自身可枚举属性还会遍历原型链上的可枚举属性，Object.keys()只遍历自身可枚举属性。

###  this

- 能简单讲一下 this 的指向吗？

    > 如何改变 this 的指向 ?
    >
    > apply, call, bind 它们三个有什么区别? 适合那些场景?
    >
    > - `apply`, `call` 传参区别 apply传入的是数组
    > - `bind` 需要手动调用 
### 类型

- js 中类型有那些？
  基本数据类型 Null Undefined Boolean String Number Symbol BigInt
  引用数据类型 Object 
- 如何判断变量的类型？

  - typeof
  - Object.prototype.toString.call()
  - instanceof
  - Array.isArray

    > `typeof` 不能判断什么？
    >
    > - object
    > - array
    > - null
    > - arguments
    > - ...
    >
    > `typeof null` 返回什么? `typeof NaN` 返回什么?
    >
    > - `typeof null` 返回 `object`
    > - `typeof NaN` 返回 `number`
    >
    > `instanceof` 存在什么问题？
    >
    > - `[] instanceof Object` 返回 `true`

###  let 与 const

- `let` `const` 有了解过吗？它与 `var` 有那些区别？
  
  > 什么是变量提升?

  - var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。let const不存在变量提升，所声明的变量一定要在声明后使用。let const不允许重复声明

    > 什么是暂时性死区？
    > 在代码块内，使用let，const命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”

    > 什么是块级作用域？如何模拟块级作用域？
    > ES5 只有全局作用域和函数作用域，没有块级作用域。块级作用域一般用{}来表示。
    > - 可以通过立即执行函数模拟块级作用域,因为立即执行函数在执行的时候会产生一个单独的作用域。

###  箭头函数 
- https://github.com/ruanyf/es6tutorial/blob/c3a4a17afa5e8aab8882065caeb563342c631d70/docs/function.md
- 箭头函数有什么作用，可以解决什么问题？
  > 箭头函数的一个用处是简化回调函数，解决this指向的问题。this绑定定义时所在的作用域，而非使用时的作用域

- 箭头函数和普通函数有什么区别?

  - this
  - 不能当做构造函数
  - 不能使用 arguments
  - ...

- 箭头函数常见的使用场景？
  箭头函数可以让this指向固定化，这种特性很有利于封装回调函数。this绑定定义时所在的作用域，而非使用时的作用域
  
- 箭头函数的注意点
  - （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
  - （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
  - （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
  - （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
    上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。

            function foo() {
              setTimeout(() => {
                console.log('id:', this.id);
              }, 100);
            }
            var id = 21;
            foo.call({ id: 42 });
            // id: 42
           

###  Map

- `Map`、`WeakMap` 和 `Object` 的有什么区别？

  - `Object` 的键为字符串类型，其他类型作为键均会转为 `String` 类型
  - `Map` 支持其他类型作为键，比如对象
  - `Map` 可以轻松的判断存了多少个值: `size`, `Object` 不行
  - `Map` 使用 `Object.is` 判断 key 是否命中，换句话说可以判断 NaN
  - `Map` 在频繁需要插入删除的情况下，性能更好
  - `Map` 是迭代器类型。虽然 Object 也支持 `...`，但是它不是迭代器。
  - `WeakMap` 只接受对象类型作为键，`null` 除外

- 例举一些 `Map` 的原生方法？

  - size
  - get
  - set
  - has
  - keys
  - values
  - clear
  - ...

- `Map` 遍历的顺序是按照什么顺序？
  - 遍历顺序为插入顺序

### Promise

- 简单介绍一下 `Promise`，它可以解决什么问题？
  Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及该异步操作的结果值。

  > `Promise.all` 有什么作用? 是请求是并行还是串行？返回的顺序是什么顺序？
  >
  > - 并行
  > - 传入的数组顺序


  > `Promise.race` 有什么作用? 当状态成为确定（FulFilled）状态后，其他请求是否还会继续？
  > - 还会继续
  > 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的promise就会解决或拒绝。
  >
  > 如何实现一个 `finally` 方法？

### 跨域相关

- 什么是跨域？为什么会有跨域的问题？例举几种常见解决跨域的方法？

  - 同源策略存在导致跨域问题。不同协议不同域名不同端口不能进行数据交换

  > jsonp 有哪些限制？jsonp 的原理是什么?
    - 只能发起 `GET` 请求, 利用 `script` 标签
  
  > iframe下会出现跨域，使用postMessage解决iframe父子模块跨域的问题。
    
```js
      //父域的运行环境是http://localhost:8087/
      <iframe src="http://127.0.0.1:8086/" id="iframepage" width="100%" height="100%" frameborder="0" scrolling="yes" onLoad="getData"></iframe>

      <script>
          getData(){
              let iframe = document.getElementById('iframepage');
              let win = iframe.contentWindow;
              win.postMessage(JSON.stringify(parentDate),"*");
          }
      </script>

      //子域的运行环境是http://127.0.0.1:8086/
      /**
       * 使用postMessage解决iframe父子模块跨域的问题
      */
      window.onmessage = function(e){
          e = e || event;
          console.log("从父域获取到的数据",JSON.parse(e.data));
          // 此处打印的数据为
          // {
          //     "name": "hello world!",
          //     "age": 18
          // }
      }
```

> `CORS` 请求什么时候会先发送一个 `OPTIONS` 请求？为什么？
    - https://juejin.im/post/5cb3eedcf265da038f7734c4
    - OPTIONS请求即预检请求，可用于检测服务器允许的http方法。当发起跨域请求时，由于安全原因，触发一定条件时浏览器会在正式请求之前自动先发起OPTIONS请求，即CORS预检请求，服务器若接受该跨域请求，浏览器才继续发起正式请求。
    跨域请求时，OPTIONS请求触发条件
    CORS预检请求触发条件  本次请求是否触发该条件
    1. 使用了下面任一HTTP 方法：  
    PUT/DELETE/CONNECT/OPTIONS/TRACE/PATCH
    2. 人为设置了以下集合之外首部字段： 
    Accept/Accept-Language/Content-Language/Content-Type/DPR/Downlink/Save-Data/Viewport-Width/Width
    3. Content-Type 的值不属于下列之一:  （application/json就会触发预检请求）
    application/x-www-form-urlencoded、multipart/form-data、text/plain
    优化OPTIONS请求：Access-Control-Max-Age设置时间 或者 避免触发触发条件
    Access-Control-Max-Age这个响应首部表示 preflight request （预检请求）的返回结果（即 Access-Control-Allow-Methods 和Access-Control-Allow-Headers 提供的信息） 可以被缓存的最长时间，单位是秒。(MDN)
    Access-Control-Allow-Origin 应当为 * 或者包含由 Origin 首部字段所指明的域名。

    预检请求发送后，从服务端会拿到这些信息。
    Access-Control-Allow-Origin: http://foo.example   白名单域名也可以是*
    Access-Control-Allow-Methods: POST, GET, OPTIONS    允许的请求方式
    Access-Control-Allow-Headers: X-PINGOTHER, Content-Type   允许的header里新增的请求头。
    Access-Control-Max-Age: 86400    缓存时间一天。

  > `CORS` 如何携带 `cookie`?
    - 后端添加另外一个请求头 
      Access-Control-Allow-Credentials: true
      前端需要设置withCredentials为true
      withCredentials= true
  > 如何判断跨域请求是否被浏览器拦截
    - 控制台里会有 error 提示

### 前端安全

- 能否描述一下 xss/csrf 攻击的原理以及如何防范？
  https://www.cnblogs.com/jxl1996/p/10186952.html

  jsx中a标签target="_blank" 要增加rel="noreferrer noopener" 防止xss攻击
  rel="noreferrer noopener" target="_blank" 

### DOM 相关

- 常用查询 dom 的 api 有哪些？他们有什么区别？

  - document.querySelector
  - document.querySelectorAll
  querySelector() 方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代
  - document.getElementById
  - document.getElementsByClassName（类数组）
  - document.getElementsByTagName

- 事件流
  js的事件流分为3个阶段：捕获、目标、冒泡。即事件来了，先从上到下传播（捕获），到达目标节点（目标），然后在往上传播（冒泡）。
  element.addEventListener(event, function, useCapture)，useCapture默认为false，即默认在冒泡阶段触发事件。

- 能否讲一下什么是事件委托？它有什么好处？
  子元素上的时间委托给父元素去绑定。性能更好。为每一个子元素绑定事件会消耗大量内存。
- 常用获取 DOM 上属性的 api 是什么?
  - getAttribute

### new
https://www.cnblogs.com/faith3/p/6209741.html
- new Foo() 发生了什么?
(1) 一个继承自 Foo.prototype 的新对象被创建。
(2) 使用指定的参数调用构造函数 Foo，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。
(3) 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）

- new 操作符有什么作用？
(1) 创建一个新对象；
(2) 链接该对象（即设置该对象的构造函数）到另一个对象 ；
(3) 将步骤1新创建的对象作为this的上下文 ；
(4) 如果该函数没有返回对象，则返回this。

### React

- React 有哪些生命周期，这些生命周期分别适合哪些操作？
  React的组件在第一次挂载的时候回首先获得父组件传递的props，接着获取初始的state值，接着经历挂载
  阶段的三个生命周期函数也就是ComponentWillMount、render、ComponentDidMount，这三个函数
  分别代表着组件将会挂载、组件渲染、组件挂载完毕三个阶段。在组件挂载完成之后，组件的props和state的任一
  改变都会导致组件进入更新状态，在组件更新阶段如果是props改变，则进入ComponentWillReceiveProps函数，
  接着进入shouldComponetUpdate进行判定是否需要更新，如果是state的改变则直接进入shouldComponentUpdate
  判定，这个默认是true，当判定不需要更新的话，组件继续运行，需要更新则依次进入ComponentWillUpdate、render、
  ComponentDidUpdate三个生命周期函数，依次代表着组件将要更新、组件在渲染、组件更新完毕。当组件卸载时，会首先
  进入生命周期函数ComponentWillUnmount，之后才进行卸载。
  1.初始化
  在组件初始化阶段会执行 
  1. constructor 
  2. static getDerivedStateFromProps() 
  3. componentWillMount() / UNSAFE_componentWillMount() (不建议)
  4. render() 
  5. componentDidMount()

  2.更新阶段
  props或state的改变可能会引起组件的更新，组件重新渲染的过程中会调用以下方法： 
  1. componentWillReceiveProps() / UNSAFE_componentWillReceiveProps()  (不建议)
  2. static getDerivedStateFromProps() 
  3. shouldComponentUpdate() 
  4. componentWillUpdate() / UNSAFE_componentWillUpdate()  (不建议)
  5. render() 
  6. getSnapshotBeforeUpdate() 
  7. componentDidUpdate()

  3.卸载阶段
  componentWillUnmount()
  4.错误处理
  componentDidCatch()

  > setState 的实现原理，为什么设计成异步？
  > - 要分为 15 和 16 的区别
  > - 16 有一个更新队列, 以及副作用列表来记录更新. 并且一旦运行超时, 就可以直接退出
  > - 15 的话相对粗暴一点, 就是一个批处理
  >
  > 为什么 setState 不设置成 state 同步更新, UI 异步更新
  > setState 一定是异步的吗？
  - https://zhuanlan.zhihu.com/p/26069727
    在React中，如果是由React引发的事件处理（比如通过onClick引发的事件处理），调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.state。所谓“除此之外”，指的是绕过React通过addEventListener直接添加的事件处理函数，还有通过setTimeout/setInterval产生的异步调用。
    原因如下：
    在React的setState函数实现中，会根据一个变量isBatchingUpdates判断是直接更新this.state还是放到队列中回头再说，而isBatchingUpdates默认是false，也就表示setState会同步更新this.state，但是，有一个函数batchedUpdates，这个函数会把isBatchingUpdates修改为true，而当React在调用事件处理函数之前就会调用这个batchedUpdates，造成的后果，就是由React控制的事件处理过程setState不会同步更新this.state

- Virtual DOM 
   1. 用js模拟一颗dom树,放在浏览器内存中.当你要变更时,虚拟dom使用diff算法进行新旧虚拟dom的比较,将变更放到变更队列中,反应到实际的dom树。
   2. 虚拟DOM将DOM树转换成一个JS对象树,diff算法逐层比较,当遇到不同节点类型的比较那么直接删除节点然后添加节点，当遇到相同节点比较但是属性不同的那么直接修改属性。当遇到列表节点的比较，那么是通过key值进行对比，可以帮助 React 定位到正确的节点进行比较，从而大幅减少 DOM 操作次数（因为如果没有这个key，那么要不停的删除dom，不停的增加新的dom），提高了性能。
  优点：虚拟DOM具有批处理和高效的Diff算法,最终表现在DOM上的修改只是变更的部分，可以保证非常高效的渲染,优化性能.
  缺点：首次渲染大量DOM时，由于多了一层虚拟DOM的计算，会比innerHTML插入慢。

  我们知道前端的DOM是一棵树，对于一个element来说，我们需要关注的是这个element的
  tagName、属性、以及子元素，而这完全可以用一个js对象来表示，比如，使用tagName属性
  来说明标签名，将所有的属性和值作为一个对象表示为props，children属性。来表示这个element的
  子元素，同样有了这个js对象，我们就可以构建一棵真实的DOM树，我们可以在每一次元素也就是js对象
  有任何变动的时候来重新构造一棵树，将这棵新的树与旧的DOM数进行比对，找出真正差异的地方，然后
  将这些差异应用在真实的DOM中，也就实现了一个简单的Virtual DOM算法。

- React diff
  https://www.infoq.cn/article/react-dom-diff
  要达到每次界面都可以整体刷新界面的目的，势必需要对算法进行优化。这看上去非常有难度，然而 Facebook 工程师却做到了，他们结合 Web 界面的特点做出了两个简单的假设，使得 Diff 算法复杂度直接降低到 O(n)
  两个相同组件产生类似的 DOM 结构，不同的组件产生不同的 DOM 结构；
  对于同一层次的一组子节点，它们可以通过唯一的 id 进行区分。

  传统 diff 算法的复杂度为 O(n^3)，显然这是无法满足性能要求的。React 通过制定大胆的策略，将 O(n^3) 复杂度的问题转换成 O(n) 复杂度的问题。
  总结优化点就是，虚拟DOM将DOM树转换成一个JS对象树,diff算法逐层比较,当遇到不同节点类型的比较那么直接删除节点然后添加节点，当遇到相同节点比较但是属性不同的那么直接修改属性。当遇到列表节点的比较，那么是通过key值进行对比，可以帮助 React 定位到正确的节点进行比较，从而大幅减少 DOM 操作次数，提高了性能。

- React 有哪些常见性能优化方法？

  - `PureComponent`，`shouldComponentUpdate`，`Functional Component`
  - 了解 `PureComponent`(通过Object.is浅比较来判断state 和 props是否改变) 内部实现，知道何时使用 `PureComponent`、 `Functional Component` 还是 `Class Component`，并有自己的理解
  - 自己实现一个 `pure` 的高阶组件（https://github.com/acdlite/recompose/blob/master/src/packages/recompose/pure.js）

  - React 16.x 有哪些新特性？

    - 16.0

    - setState 支持传递 null
    - 支持返回 fragment（数组）, 支持返回 string
    - 可以自定义 Element 的 attribute, 不会报错了
    - 强大的 SVG 支持
    - 内部构架改造
    - Portals 可以使组件脱离父组件层级直接挂载在DOM树的任何位置。 
    - 错误边界 componentDidCatch
    - 速度提升的服务器渲染, 新的 hydrate 方法。

  - 16.2

    - 原生 Fragment 支持，相比使用数组，需要那么多逗号，通过 `<Fragment>` 或者 `<>` 来提升代码的可读性。
    - 可以继续问问 `<>` 和 `<Fragment>` 的区别：<> 不支持 key

  - 16.3
    - 新的 Context 支持
    - 新的生命周期，淘汰旧的生命周期。
      可以问一下，为什么会淘汰 will 生命周期。
      componentWillMount、componentWillReceiveProps（调用父组件setState函数会导致死循环）
      componentWillUpdate这三个生命周期函数有缺陷，比较容易导致崩溃。
      getSnapshotBeforeUpdate和getDerivedStateFromProps来代替上面三个
    - 在 willMount 中做 ajax 请求有什么问题
      在componentWillMount执行ajax，对ajax的结果进行setState,即使ajax的返回结果在render之前，也会引起新的render，不会和原来的state进行合并，进行一次render，为什么？
      这就需要了解JavaScript的执行机制了，JavaScript是单线程，分为“当前线程”和任务队列。
      ajax的执行结果会放到任务队列中，等主线程执行完后采取读取任务队列中的任务进行执行。
      虽然setState也是异步的，但是他们不在同一个“任务单元”中，执行上下文已发生改变，所以是不可能被合并的。不仅在willmount中ajax回调中的setState不会和外面同步调用的setState合并，所有异步的回调都不会。
      这样的话，就没必要在willmount中调用ajax，以避免理解不到位，对state的结果预计错误。didMount的执行很明了，不会引起歧义，所以在didMount中最合理了。
    - `<StrictMode>` 严格模式
    - `forwardRef` ref传递的增强。createRef

- React 中的 key 有什么作用？
如果指定的key不唯一，只会渲染第一个指定唯一的key的那个元素，使用key可以使得DOM diff更加高效，避免不必要的列表项更新。
因为在reactelement中有一个属性是key，该属性默认是为空值，所以一般情况下，只要组件不加上key值，react是不会去校验组件的key，而是直接采用diff算法进行对比，一旦组件加上了key值，react就会在渲染时对该组件的身份进行校验，首先校验新旧组件的key值是不是一致，不一致的话，该组件直接销毁，然后在新建该组件；如果一致，则比较组件的属性是否发生变化，如果发生变化，则采用diff算法进行对比，然后得出差异对象，如果属性没发生变化，则认为该组件不需要改变。

- 介绍一下高阶组件, 为什么不用 mixin? 高阶组件的一些缺陷, 注意点

  - mixin 代码太骚，容易出现上帝对象，不利于维护
  - 高阶组件不能保留 static
  - 在 render 中生成高阶组件会出现性能问题和状态丢失（可以问原因）
  - 无法保留 ref。可以通过 forwardRef 解决

- ref 的为什么不能用在函数式组件上
  获取不到实例

- 如何实现删除一个列表数组中的，第一个元素
  这一题主要考察面试者是否使用 immutable 的风格来写代码。能说到 filter, 基本上就够了. 接着可以问问，为什么要 immutable，这种方式明明让每次 setState 由原来的 O(1)(Maybe), 提升到了 O(n), 为什么还要这种？

  - 最好的实现:

    ````
        ```js
        this.setState(({list}) => ({list: list.filter(_, i) => i !== 0}));
        ```
    ````

### Redux

- Redux 的实现原理

  - store 挂在在哪？

    > Provider上

  - context 的常用场景
  当props需要传递的节点很深，但是中间几个节点都不需要这个prop。就可以用context来用，通过Provider和Consumer做传递。

  - 什么是 action
    redux 默认只允许 action 作为是一个 Plain Object，并且必须要有一个 type 类型。
    这里可以继续问，如何判断一个对象是纯对象，action 可以为其他类型吗？
    Plain Object: 指的是通过字面量形式或者new Object()形式定义的对象。 
    https://www.zhihu.com/question/287632207/answer/457618735
    redux源码中有一下判断。
    ```js
      function isPlainObject(obj) {
        if (typeof obj !== 'object' || obj === null) return false
        let proto = obj
        while (Object.getPrototypeOf(proto) !== null) {
          proto = Object.getPrototypeOf(proto)
        }
        return Object.getPrototypeOf(obj) === proto
      }
    ```

    Redux的action默认只允许普通对象，但是可以通过redux-thunk使 Redux 处理函数这样的actions。

  - redux 中间件的实现

  用过中间件的朋友都用过 `redux-thunk`, 可以问为什么需要 redux-thunk, 直接在每次 dispatch 后，直接发异步请求不行吗？
  dispatch后会触发reducer，reducer是纯函数，里面不能做异步请求。所以我们一般都是先进行异步请求，然后在dispatch一个action。
  它是一个返回值为函数而非简单 action 对象的 action 生成器，Action 生成器返回的函数接收两个参数：dispatch 函数和 getState。

  redux 的中间件满足这种形式

  ```js
  // store: {getState, dispatch}
  const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
  };
  ```

  ```js
  export const thunk = store => next => action =>
    typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);
  ```

  其中前两个参数在 `applyMiddleware` 的时候，就已经投放进去。最后返回的 action 函数，就会成为最终的 dispatch. 并传给下一个 middleware 作为 next 参数。最初始的 next 就是 store 的 dispatch

- connect 高阶组件做了什么事情
  connect 的核心作用就是:
  由 Provider 作为传统 context 父组件，进行一系列的 childType 注册。
  connect 返回的组件，会自动监听 context，并使用了 store 的 subscribe 方法，subscribe 了 store 的变更，而 subscribe 的内容也十分粗暴: `this.forceUpdate()`。
  而 connect 中的两个参数: `mapStateToProps` and `mapDispatchToProps` 无非就是注入 dispatch 和 store 的 props 的方式。在每次收到 store 的更新后，会调用 `mapStateToProps` 方法得到新的 props，并通过类似于 PureComponent 的方式和前一次 props 进行比较，来决定是否需要更新组件。

- redux 异步（副作用）action 的处理
- redux 的缺点，以及 dva（用过的话）是怎么处理的
- 复杂 store 的更新性能问题
  这个问题主要是因为每次 store 的修改，就会触发 `mapStateToProps` 的调用。如果这个方法中存在类似于
  `state => state` 这种愚蠢的方式，或者存在每次运行都会不同的 props，比如 selector 中包含了 map，filter 这些的逻辑，或者一个内联函数一类的，就会导致这个问题。这种情况一般需要用到 memorize，如 reselect

### CSS
- CSS三大特性—— 继承、 优先级和层叠。
  继承：即子类元素继承父类的样式;
  优先级：是指不同类别样式的权重比较;
  层叠：是说当数量相同时，通过层叠(后者覆盖前者)的样式。

- 为什么CSS选择器是从右往左解析
https://blog.csdn.net/jinboker/article/details/52126021

- 例举一些常见的 css 选择器，它们的优先级是怎么样的？如何选择相邻元素、指定子元素？
  !important > 行内样式 > ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性
  相邻兄弟选择器使用了加号（+）
  E > F 表示选择E元素的所有子F元素，与E F的区别在于，E F选择所有后代元素，>只选择一代。
  p~ul选择前面有<p>元素的每个<ul>元素，即选择p之后出现的所有ul，两种元素必须拥有相同的父元素，但ul不必紧随p。

- 什么是伪类/伪元素，它们有什么区别？常用场景是什么？
  伪类:是一个以冒号(:)作为前缀，伪类其实是弥补了CSS选择器的不足 例如 :active :hover :first-child等 
  对于:link, :visited, :hover, :active这四个伪类，必须要记住的就是他们的书写顺序：link-visited-hover-active 或者 visited-link-hover-active，不然会被覆盖。
  伪元素:前缀是两个冒号 (::) 例如::after ::before等。伪元素本质上是创建了一个虚拟容器(元素)，我们可以在其中添加内容或样式
  https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements

- 讲一下你理解的盒模型，标准盒模型的 width 包括哪些部分？如何修改盒模型？
  标准盒模型 怪异盒模型
  怪异盒模型元素宽度width=content+padding+border
  标准盒模型元素宽度width=content，不包含border和padding
  在ie8+浏览器中使用哪个盒模型可以由box-sizing(CSS新增的属性)控制，默认值为content-box，即标准盒模型；如果将box-sizing设为border-box则用的是怪异盒模型。
- 例举一下你常用的垂直居中的方法，并介绍他们适合那些场景？

  - display: table-cell
  - top: 50%, margin-top: -(height \* 50%)
  - top: 50%, transform: translateY(-50%)
  - flex align-items = center

- 例举一下你经常使用的清除浮动的方法，这些方法适合哪些场景？
  1. 额外标签法 使用空div闭合浮动元素，空的div加在最后一个浮动元素下面，然后对这个空div进行clear: both;
  2. 最外层标签设置 overflow: hidden || auto 触发BFC
  原理：设置了overflow不为visible的元素，会生成一个BFC(块级格式化上下文)。根据BFC的特性，BFC在计算高度的时候，浮动元素也会参与高度的计算。
  3. 伪类解决 最外层标签使用
  .clearfix:after {
    content: "";
    display: block; 
    clear: both;
  }
  4. 使用min-height: contain-floats清除浮动
  使用这种方法清除浮动，只需要给父级元素添加一行代码就可以了：
  .container {
    min-height: contain-floats;
  }
  这种方法的使用范围也许不是很广泛，浏览器的兼容性可能并不好。

- position 有哪些属性？默认属性是什么？`absolute` 是基于什么定位？
  static（默认值） | relative | absolute | sticky（粘性定位） | fixed（相对于浏览器窗口进行定位）
  absolute生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位
  粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。

- 如何通过 css 来实现动画？简单讲一讲 `transition` 与 `animation` 的用法与区别？
  transition 过渡~ 属性，触发动作，一过性不能重复发生，除非一再触发,transition只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。
  animation  动画~关键帧，往复性(可以设置次数1、2、3，也可以无数次infinite)。
  div:hover {
    animation: 1s rainbow(动画效果的名称) infinite;
  }
  @keyframes rainbow {
    0% { background: #c00; }
    50% { background: orange; }
    100% { background: yellowgreen; }
  }
  > `CSS` 动画和通过 `js` 来实现动画有哪些优势？
  1. 浏览器可以对动画进行优化
  2. 强制使用硬件加速 （通过 GPU 来提高动画性能）比如修改opacity属性不触发layout或paint
  3. 对于帧速表现不好的低版本浏览器，CSS3可以做到自然降级，而JS则需要撰写额外代码

- 讲一下对重排、重绘的理解，什么时候触发重绘，什么时候触发重排
  1. 重绘 重绘是一个元素 外观的改变 所触发的浏览器行为，例如改变vidibility、outline、背景色等属性
  2. 重排是更明显的一种改变，可以理解为渲染树需要重新计算。下面是常见的触发重排的操作：
     DOM元素的几何属性变化。
     DOM树的结构变化。（例如节点的增减、移动等.）
     当获取一些属性时，浏览器为取得正确的值也会触发重排。这样就使得浏览器的优化失效了。这些属性包括：offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight、getComputedStyle() (currentStyle in IE)。所以，在多次使用这些值时应进行缓存。
  减少重排：
  1. 将多次改变样式属性的操作合并成一次操作
  2. 将需要多次重排的元素，position属性设为absolute或fixed，这样此元素就脱离了文档流，它的变化不会影响到其他元素。例如有动画效果的元素就最好设置为绝对定位。
  3. 由于display属性为none的元素不在渲染树中，对隐藏的元素操作不会引发其他元素的重排。如果要对一个元素进行复杂的操作时，可以先隐藏它，操作完成后再显示。这样只在隐藏和显示时触发2次重排。
  4. 使用 window.requestAnimationFrame()、window.requestIdleCallback() 这两个方法调节重新渲染

  以下CSS属性都能触发GPU的硬件加速：
  1. opacity
  2. transform
  3. filter

### Vue

- Vue里的双向绑定实现的关键技术点有哪些？Object.defineProperty有什么缺陷吗？Vue3有什么变化？
  - defineProperty不能检测以下变化。
  1. 对象属性的添加或删除,
  2. 数组里，当你利用索引直接设置一个项时，例如：`vm.items[indexOfItem] = newValue`
  3. 当你修改数组的长度时，例如：`vm.items.length = newLength`
  4. 调用数组的原生方法如`push,pop,sort`等。
  > 注意：vue官方对这些原生数组方法的进行了监听，默认情况下我们使用这些方法能够正常触发视图更新。但是如果我们想要模拟vue实现这套双向绑定就需要考虑对这些方法的改写。
  - Vue3利用ES6的Proxy重新实现了双向绑定，解决了上述问题
- `v-model`这个语法糖实现了什么
  - 在普通表单绑定中会这样

  ```html
    <input v-model="searchText">
  ```

   转化成：

   ```html
    <input
      v-bind:value="searchText"
      v-on:input="searchText = $event.target.value"
    >
  ```

  - 在自定义组件中， 注意要自己实现`input`事件
    ```html
      <custom-input v-model="searchText">
    ```
    转化成：

    ```html
      <custom-input
        v-bind:value="searchText"
        v-on:input="searchText = $event"
      ></custom-input>
    ```
  - `.sync` 修饰符具体做了什么？
    实现props的双向绑定

    ```html
      <text-document v-bind:title.sync="doc.title"></text-document>
    ```

    转化成

    ```html
      <text-document
        v-bind:title="doc.title"
        v-on:update:title="doc.title = $event"
      ></text-document>
    ```

    然后子组件需要通过触发事件`updata:title`来实现更新属性

    ```js
    this.$emit('update:title', newTitle)
    ```

  - `slot`插槽与`slot-scope`作用域插槽有什么不同？
    - 插槽:Vue 实现了一套内容分发的 API，这套 API 基于当前的 Web Components 规范草案，将 `<slot>` 元素作为承载分发内容的出口. 比如实现一个dialog，允许外部传入自定义内容。就需要用到插槽。
      > 父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。
    - 作用域插槽：带有一个可从子组件获取数据的可复用的插槽。简单来讲就是能读取子组件里的数据。重点考察使用场景，最典型的就是element-ui里的table自定义cell就是通过作用域插槽实现的。
  - `$nextTick`这个方法有什么用？有什么使用场景。它在不同环境中实现有什么不同？
    - 简单讲就是在视图更新后执行里面的回调。
    > 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
    - 默认是promise，不支持时用的是setTimeout
    > Vue 在内部尝试对异步队列使用原生的 Promise.then 和 MessageChannel，如果执行环境不支持，会采用 setTimeout(fn, 0) 代替
  - 计算属性的使用场景是什么？对比方法，侦听属性有什么优势？计算属性有setter么？
    - 比如合并字符串，姓+名得到姓名的
    - 语义更明确，有依赖缓存，只有依赖变更了才会变更。
    - 默认只有getter，但支持设置setter。场景可以是某个属性是计算得来的，然后可以修改它。在setter中完成对依赖属性的更新

## 计算机基础

### 计算机网络

- 例举 http 协议的常见状态类别，和他们的定义
  主要考察大类，比如 2xx, 3xx, 4xx 的含义. 不涉及具体某个指定状态码
  2xx：成功--表示请求已被成功接收、理解、接受
  3xx：重定向--要完成请求必须进行更进一步的操作
  4xx：客户端错误--请求有语法错误或请求无法实现
  5xx：服务器端错误--服务器未能实现合法的请求
  200 OK      //客户端请求成功
  400 Bad Request  //客户端请求有语法错误，不能被服务器所理解
  401 Unauthorized //请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用 
  500 Internal Server Error //服务器发生不可预期的错误
  503 Server Unavailable  //服务器当前不能处理客户端的请求，一段时间后可能恢复正常
  504错误是（网关超时） 服务器作为网关或代理，但是没有及时从上游服务器收到请求。

  > 301、302、303、307 他们之间有什么区别？
    https://blog.csdn.net/reliveIT/article/details/50776984
    - 301永久重定向 
    - 302临时重定向 HTTP1.0的状态码 get请求会自动重定向，如果client向server发送post请求。server返回URL和302。如果用户确认，client发送post请求。（但实际情况是，很多浏览器都不问问用户，直接变为get发送get请求,导致302劫持出现。）
    - 303临时重定向，HTTP1.1的状态码 无论原请求是get还是post，都可以自动进行重定向
    - 307临时重定向，HTTP1.1的状态码 原请求不是get或者head方法，那么浏览器一定不能自动的进行重定向，即便location有url，也应该忽略
  > 304 代表什么含义？和其他 3xx 有什么区别?
  > HTTP 304 未改变说明无需再次传输请求的内容，也就是说可以使用缓存的内容。这通常是在一些安全的方法（safe），例如GET 或HEAD 或在请求中附带了头部信息： If-None-Match 或If-Modified-Since。
  > 403, 404 代表什么含义 ?
  403 Forbidden  //服务器收到请求，但是拒绝提供服务
  404 Not Found  //请求资源不存在，eg：输入了错误的URL

- 简单讲一下 HTTP/2.0 对比 HTTP/1.1 有哪些新特性?
  1. 单一长连接（降低延迟）
  2. 多路复用 一个TCP连接上同时跑多个HTTP请求。请求可设定优先级。
  3. 头部压缩和二进制格式 去除不需要的HTTP头，压缩HTTP头，以减少需要的网络带宽
  4. 使用了SSL作为传输协议提供数据安全
  5. 服务端推动Sever Push
  
  > HTTP2.0可以说是SPDY的升级版（其实原本也是基于SPDY设计的），但是，HTTP2.0 跟 SPDY 仍有不同的地方，主要是以下两点：

  1. HTTP2.0 支持明文 HTTP 传输，而 SPDY 强制使用 HTTPS
  2. HTTP2.0 消息头的压缩算法采用 HPACK，而非 SPDY 采用的 DEFLATE

  > SPDY 有了解过吗？它解决了那些问题？和 HTTP/2.0 的关系是什么？
  - 直到2012年google如一声惊雷提出了SPDY的方案，大家才开始从正面看待和解决老版本http协议本身的问题，这也直接加速了http2.0的诞生。实际上，http2.0是以SPDY为原型进行讨论和标准化的。为了给http2.0让路，google已决定在2016年不再继续支持SPDY开发，但在http2.0出生之前，SPDY已经有了相当规模的应用，作为一个过渡方案恐怕在还将一段时间内继续存在。
    
  - SPDY的目标在一开始就是瞄准http1.x的痛点，即延迟和安全性。
    HTTP(应用层)
    SPDY
    SSL
    TCP(传输层)

    理解http协议之前一定要对TCP有一定基础的了解。HTTP是建立在TCP协议之上，TCP协议作为传输层协议其实离应用层并不远。HTTP协议的瓶颈及其优化技巧都是基于TCP协议本身的特性。比如TCP建立连接时三次握手有1.5个RTT（round-trip time）的延迟，为了避免每次请求的都经历握手带来的延迟，应用层会选择不同策略的http长链接方案。又比如TCP在建立连接的初期有慢启动（slow start）的特性，所以连接的重用总是比新建连接性能要好。所有SPDY出现就是为了针对HTTP1.x版本的痛点。

    SPDY基础功能：
    多路复用（multiplexing）。多路复用通过多个请求stream共享一个tcp连接的方式，解决了http1.x holb（head of line blocking）的问题，降低了延迟同时提高了带宽的利用率。
    请求优先级（request prioritization）。多路复用带来一个新的问题是，在连接共享的基础之上有可能会导致关键请求被阻塞。SPDY允许给每个request设置优先级，这样重要的请求就会优先得到响应。比如浏览器加载首页，首页的html内容应该优先展示，之后才是各种静态资源文件，脚本文件等加载，这样可以保证用户能第一时间看到网页内容。
    header压缩。前面提到过几次http1.x的header很多时候都是重复多余的。选择合适的压缩算法可以减小包的大小和数量。SPDY对header的压缩率可以达到80%以上，低带宽环境下效果很大。

  > WebSocket 解决了那些问题？有哪些好处？
    - WebSocket则提供使用一个TCP连接进行双向通讯的机制，包括网络协议和API，以取代网页和服务器采用HTTP轮询进行双向通讯的机制。

  > SPDY和WebSocket的区别
  1. 补充关系，二者侧重点不同。SPDY更侧重于给Web页面的加载提速，而WebSocket更强调为Web应用提供一种双向的通讯机制以及API。
  2. 竞争关系，二者解决的问题有交集，比如在服务器推送上SPDY和WebSocket都提供了方案。
  3. 承载关系，试想，如果SPDY的标准化早于WebSocket，WebSocket完全可以侧重于API，利用SPDY的帧机制和多路复用机制实现该API。 Google提出草案，说WebSocket可以跑在SPDY之上。WebSocket的连接建立在SPDY的流之上，将WebSocket的帧映射到SPDY的帧上。
  4. 融合关系，如微软在HTTP Speed+Mobility中所做的。

- HTTP 与 HTTPS 有什么区别？
  - HTTPS在HTTP的基础上加入了SSL协议，SSL依靠证书来验证服务器的身份，并为浏览器和服务器之间的通信加密。
  HTTP：是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP），用于从WWW服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，使网络传输减少。
  HTTPS：是以安全为目标的HTTP通道，简单讲是HTTP的安全版，即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。
  HTTPS协议的主要作用可以分为两种：一种是建立一个信息安全通道，来保证数据传输的安全；另一种就是确认网站的真实性。

  HTTPS和HTTP的区别主要如下：

1、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。

2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。

3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。

4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

  > HTTP 的安全方面上有那些缺点？
  - HTTP协议以明文方式发送内容，不提供任何方式的数据加密，如果攻击者截取了Web浏览器和网站服务器之间的传输报文，就可以直接读懂其中的信息。
    因此，HTTP协议不适合传输一些敏感信息，比如：信用卡号、密码等支付信息。
  > 全站使用 HTTPS 有那些需要考虑的？
    1. HTTPS连接缓存不如HTTP高效，大流量网站如非必要也不会采用，流量成本太高
    2. HTTPS连接服务器端资源占用高很多，支持访客稍多的网站需要投入更大的成本，如果全部采用HTTPS，基于大部分计算资源闲置的假设的VPS的平均成本会上去。
    3. HTTPS协议握手阶段比较费时，对网站的相应速度有负面影响，如非必要，没有理由牺牲用户体验。
    4. SSL证书需要钱，功能越强大的证书费用越高，个人网站、小网站没有必要一般不会用。
    5. 服务器端的CPU压力，HTTPS中大量的密钥算法计算，会消耗大量的CPU资源
    HTTPS 降低用户访问速度。SSL握手，HTTPS 对速度会有一定程度的降低，但是只要经过合理优化和部署，HTTPS 对速度的影响完全可以接受。在很多场景下，HTTPS 速度完全不逊于 HTTP，如果使用 SPDY，HTTPS 的速度甚至还要比 HTTP 快。 


- 能讲一下什么是进程，什么是线程吗？它们俩的关系是怎么样的？
  电脑中时会有很多单独运行的程序，每个程序有一个独立的进程，而进程之间是相互独立存在的。
  进程想要执行任务就需要依赖线程。换句话说，就是进程中的最小执行单位就是线程，并且一个进程中至少有一个线程。

  一个进程可以包括多个线程，一个进程中至少有一个线程。
  一个进程的内存空间是共享的，每个线程都可以使用这些共享内存。
  一个线程使用某些共享内存时，其他线程必须等它结束，才能使用这一块内存
  先到的人锁上门，后到的人看到上锁，就在门口排队，等锁打开再进去。这就叫"互斥锁"（Mutual exclusion，缩写 Mutex），防止多个线程同时读写某一块内存区域。


### 简述https原理，以及与http的区别

- http协议是客户端与服务器之间的通信协议,https可以理解为 http+ssl/tls,
- 非对称加密,服务器私钥,客户端公钥
    > https 需要证书,要费用.
    > 安全加密.
    > 端口不一样,http是80,https是443
    > http的连接很简单，是无状态的；HTTPS协议是由SSL/TLS+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

### 实现原生ajax
    -  /src/ajax.js(./src/ajax.js)
### vue-router源码
    - history
    > 通过history.pushState来修改url,
    > 通过window.addEventListener('popstate',cb),来监听前进后退
    - hash
    > 通过window.location来修改hash,
    > 通过 window.addEventListener('hashchange', callback) 来监听 URL 的变化
### vue原理（手写代码，实现数据劫持）
    
### 
### 你知道哪些http头部
    - Accept 允许哪些媒体类型
    - Accept-Charset 字符集
    - Accept-Encoding 编码
    - Accept-Language 语言
    - Cache-Control 缓存策略
    - Connection 连接选项
    - Host
    - Referer 请求发起的源头
    - User-Agent
    - Last-Modified 缓存相关,最近修改时间
### 怎么与服务端保持连接
    - socket
### webpack怎么优化
    - 速度优化
    - 体积优化
### 你了解哪些请求方法，分别有哪些作用和不同
    - get post put delete option
### 你觉得typescript和javascript有什么区别
    - 1.便于开发人员做注释。
      2.能帮助开发人员检测出错误并修改。
      3.TypeScript工具使重构更变的容易、快捷。
      4.TypeScript 引入了 JavaScript 中没有的“类”概念。
      5.TypeScript 中引入了模块的概念，可以把声明、数据、函数和类封装在模块中。
      6.。类型安全功能能在编码期间检测错误，这为开发人员创建了一个更高效的编码和调试过程。
### typescript你都用过哪些类型
### typescript中type和interface的区别
    - type 可以声明基本类型别名，联合类型，元组等类型
    - type 语句中还可以使用 typeof 获取实例的 类型进行赋值
    - interface 能够声明合并
    - 如果不清楚什么时候用interface/type，能用 interface 实现，就用 interface , 如果不能就用 type 。
### 你了解node多进程吗
### node进程中怎么通信
### node可以开启多线程吗
### 
### cookie有哪些属性
    - name字段：一个cookie的名称
    - value字段：一个cookie的值
    - domain字段：可以访问此cookie的域名
    - path字段：可以访问此cookie的页面路径
    - Size字段：此cookie大小
    - http字段：cookie的httponly属性，若此属性为True，则只有在http请求头中会有此cookie信息，而不能通过document.cookie来访问此cookie。
    - secure字段：设置是否只能通过https来传递此条cookie。
    - expires/Max-Age字段：设置cookie超时时间。如果设置的值为一个时间，则当到达该时间时此cookie失效。不设置的话默认是session，意思是cookie会和session一起失效，当浏览器关闭（并不是浏览器标签关闭，而是整个浏览器关闭）后，cookie失效。
### cookie,session,localstorage,sessionstorage有什么区别
### 怎么禁止js访问cookie
    - cookie的httponly属性
### position有哪些属性
    - relative
    - absolute
    - static
    - fixed
### options请求方法有什么用
    - 浏览器对复杂跨域请求的一种处理方式,在真正发送请求之前,会先进行一次预请求,就是我们刚刚说到的参数为OPTIONS的第一次请求,他的作用是用于试探性的服务器响应是否正确,即是否能接受真正的请求,如果在options请求之后获取到的响应是拒绝性质的,例如500等http状态,那么它就会停止第二次的真正请求的访问
### less,sass它们的作用是什么
    - css预处理器
