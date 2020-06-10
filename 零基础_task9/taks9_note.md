# JavaScript学习

_为直观和节省时间，均为伪代码_

## 介绍

**组成**：核心(ECMAScript)、文档对象模型（DOM）和浏览器对象模型（BOM），值得注意的是ECMAScript与web浏览器没有关系，这是所实现的环境之一。

文档对象模型（DOM,Document Object Model）把整个页面映射为一个多层节点结构，HTML/XML每个组成都是某个类型的节点。

浏览器对象模型（BOM,Brower Object Model）处理浏览器窗口和框架，还有一些JavaScript扩展。

应用程序接口（API,Application Programming Interfaces）已经建立好的代码组件，方便实现很难或者无法实现的程序，分为浏览器API和第三方API。

* 浏览器API，内建于web浏览器，包括文档对象模型API、地理位置API(Geolocation API)、画布(Canvas)等等。
* 第三方API从网上获取，如微博API、谷歌API等等。

**轻量级解释(interpret)性语言**，存在即时编译(just-in-time compiling)的技术，执行时被编译成二进制格式，使之代码运行速度加快，不同的是，编译（compile）性语言是编译过程发生代码之中。

**服务端与客户端**，简单的理解类似于前后端区别。服务端服务器运行，客户端用户设备运行。

目前更多的稳定支持的在于ES6

## 基本

JavaScript通过事件发生时调用函数执行，

* 从上至下的执行代码，也意味着代码顺序很重要。
* 严格区分大小写，
* 请不要在元素内添加``onclick``处理器的类似的操作，避免污染HTML。、
* 单行注释为``//``，多行为``/**/``。
* 单引号和双引号一样，但不用混用。
* 使用Unicode字符集。

### 添加JavaScript

和CSS类似，可以在内部，也可以在外部。外部引用为：

```
<script type="text/javascript" src="xxx.js" async></script>
```

内部为

```
<script></script>
```



### 变量与运算符

推荐``let``而不是``var``，JavaScript数据类型包括String(字符串)、Number(数字)、Boolean(布尔值)、Array(数组)和Object(对象)。可用``typeof var``了解变量类型。

```
let number1 = 12;
string1 = 'abc';
string2 = 'efg';
string3 = string1 + string2;
boolean1 = true;
array1 = [1, 'bcd', true];
obejct1 = {name : 'Ander', height: '170'};
```

命名：数字、大小写字母和下划线组合，推荐[小写驼峰命名法](https://en.wikipedia.org/wiki/CamelCase#Variations_and_synonyms)，简单来说就是第一个字母小写，而之后单词首字母大写，避免使用[保留关键词](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)。

**运算符**

包括基本的``+、-、*、/、++、--、%（取模或称求余）、**(幂)``和``<、>、==(等于)、!=、===（全等）、!==(非全等)``。

二进制运算：``&(and)、|(or)、^(xor)、~(按位非)``，以及``<<(按位左移)、>>(按位右移)、>>>(按位无符号右移)``。

逻辑运算符：``&&、||、!``。

### 输出

* windows.alert()：警告框
* document.write()：用于测试

```
document.write()
```

* innerHTML

```
document.getElementById('xx').innerHTML =  'new comtents'
```

* console.log()：控制台

###语句

**if...else**

```
if (condition) {

} else if {

} else {

}
//或
if (condition)
```

**switch**

```
switch (expression) {
	case choice1:
	
	case choice2:
	
	default:
	
}
```

**三元运算符**

```
(condition) ? A : B;			//如果为true返回A，否则返回B
```

**for**

```
for (var i = 0; i < 100; i++0) {

}
```

break退出循环，continue跳出当前循环进入下一个。

**while与do...while**

```
while (condition) {

}

do {

} while (condition)
```



### 函数

**定义函数**

```
function add(number1, number2) {
	number = number1 + number2;
	renturn number;
}
add(1, 2)
```

匿名函数：常用于触发事件。

```
function() {

}
let var1 = function() {

}
var1();
```



### 事件

```
document.querySelector('html').onclick = function() {};
```

等价于

```
let myHTML = document.querySelector('html');
myHTML.onclick = function() {};
```

方式

* 事件处理器：onclick被赋值于btn的一个属性。

  ```
  let btn = document.querySelector('button');
  btn.onclick = function() {
  
  }
  //或
  let btn = document.querySelector('button');
  function name() {
  
  }
  btn.onclick = name;
  ```

* 行内事件处理器，在HTML写入onclick，**避免使用**。

* addEventListener()和removeEventListener()，在[DOM Level 2 Events](https://www.w3.org/TR/DOM-Level-2-Events/)新定义的方式。

  ```
  let btn = document.querySelector('button');
  function name() {
  
  };
  btn.addEventListener('click', name);
  //匿名函数的使用
  btn.addEventLsitener('click', function() {
  
  });
  //移除事件监视器
  btn.removeEventListener('click', name);
  ```




## 额外问题

### ``==``与``===``

如果两个值类型不同，``===``为false，类型不同但转化后的结果（如字符串与数字、null和underfined）相等，==为true。

###getElementById与querySelector

querySelector返回子代第一个数据，适用于无id的元素，getElementById根据id返回数据





[ MDN ]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript
[ W3C ]: https://www.w3school.com.cn/js/index.asp



















