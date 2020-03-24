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
<script src="xxx.js" async></script>
```

内部为

```
<script></script>
```



### 输出

* ``window.alert()``写入警告框：弹出一个广告框，

``window.alert(5 + 6);``弹出框显示11

* ``document.write()``写入HTML输出：多用于**测试**，

* ``innerHTML``写入HTML元素：后面规定的即为加入的内容。

```
<p id="test"></p>
<script>
document.getElementById("test").innerHTML = 5 + 6;
</script>
```

* ``console.log()``写入浏览器控制台：F12那个console。

```
<script>
console.log(5 + 6);
</script>
```

###变量

学过其他编程语言对这些不太陌生了，所以不写特别基础的了。

```
<script>
var x, y, z;
x = 11;
y = 22;
z = x + y;
document.getElementById("test").innerHTML = "z值为" + z + ".";
</script>
```

``{}``为定义一同执行的语句。

**关键词：**

```
break、continue、debugger、do...while、for、function、if...else、return、switch、try...catch、case、finally、export、extends、this、class、const、typeof、import、var、default、in、void、delete、instanceof、new、with等等
```

**运算符**：``+、-、*、/、==``，可用``+``将字符串或字符串与数值连接。``%``为系数（也是余数），``++``为递加，``--``为递减，``**``为幂（``x ** 2``与``Math.pow(x,2);``一样）。[运算符优先级参考]([https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E8%BF%90%E7%AE%97%E7%AC%A6%E4%BC%98%E5%85%88%E7%BA%A7](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#运算符优先级))，还有很多赋值运算符``+=、-=、*=、/=、%=、&=、^=、|=``

**变量命名：**首字符必须为字母、``_``、``$``，变量未命名前为``undefined``，在一条语句声明所有变量时用``,``分隔。

如果变量运算内有一个字符串的，后面数值都会被作为字符串处理。

````
<script>
x = 3 + 5 + "5" + 3 + 5;
document.getElementById("test").innertHTML = x;
</script>
````

上述结果为``8535``。

**数据类型**：数值、字符串值、数组、对象等等，数据类型根据情况转换。

```
var number = 7;			// 数字
var lastName = "Mary";		// 字符串
var Phones = ["VIVO", "MEIZU", "OPPO", "Xiaomi", "Apple"];		// 数组
var x = {firstName:"Bill", lastName:"Gates"};			// 对象
```

* 科学计数法：

```
var x = 123e5;
var y = 123e-5;
```

* 布尔值：ture与false，常用于测试中。
* 数组

```
var Phones = ["VIVO", "MEIZU", "OPPO", "Xiaomi", "Apple"];
document.getElementByld("test").innerHTML = Phones[0];
```

结果为``VIVO``，

* 对象

```
var person = {firstName:"Bill", lastName:"Gates"};
document.getElementById("test").innerHTML = person.firstName + " and " + person.lastName;
```

返回``Bill and Gates``

* typeof：确定变量类型（果然很鸡肋就是了）number、string、object等等，其中数组和对象都可以返回``object``，fuction为函数。

```
document.getElementById("demo").innerHTML = typeof 1 + "<br/>"+ typeof "Bill";
```

* undefined：可以通过这个来去除数据和数据类型，之后数据类型为``undefined``
* Null：数据类型为对象，因此作为声明时不能清除对象值，但是可以用``undefined``清除对象值。

### 函数

####简单

```
function myFunction(p1, p2) {
	return p1 * p2;
}
```

通过``function``进行定义函数，后面为函数名和包括的内容。函数命名与变量一致，``()``内为由``,``分隔的参数。通过调用函数来执行函数。``return``时停止执行，返回规定的结果。

```
var x = myFunction(7, 8);

function myFunction(a, b) {
	return a * b;
}
```

即可得到x的返回值为``56``。

```
function toCelsius(fahrenheit) {
	return (5 / 9) * (fahrenheit-32)
}

document.getElementById("test").innerHTML = toCelsius(77);
```

即可得到显示的结果为``25``。如果改为``toCelsius``，不增加值，返回函数定义。

变量可以直接当作变量值使用，

```
<p id="test1"></p>
<p id="test2"></p>
```

```
<script>
myFunction();

function myFunction() {
	var phoneName = "VIVO";
	document.getElementById("test1").innerHTML = typeof phoneName + " " + phoneName;
}

document.getElementById("test2").innerHTML = typeof phoneName;
</script>
```

返回的为

````
string VIVO
undefined
````

**匿名函数**：无函数名，和上面类似，但是可读性很差。

```
function() {
  alert('hello');
}
```

调用方式为：

```
var myGreeting = function() {
  alert('hello');
}
myGreeting;
```

常用匿名函数运行事件为

```
myButton.onclick = function() {
  alert('hello');
}
```

####基本函数

**for循环**：

```
for (let i = 1; i < 10; i++) {
	console.log(i);
}
```

**if...else**

```
if () {

} else if () {

} else {

}
```

**switch**

```
switch () {
	case choice1:
		xxx;
		break;
	case choice2:
		xxx;
		break;
	default:
		xxx;
}
```

**三元运算符**

```
(判断语句) ? 返回语句1 : 返回语句2;
```

**while与do...while**

```
while () {

}

do {

} while ()
```



* break：跳出循环
* continue：跳出当前循环进行下一个循环。



**xxx.replace(pattern, replacement)**：一个替换语句，并返回替换后的值



#### 使用

```
var html = document.querySelector('html');

var panel = document.createElement('div');
panel.setAttribute('class', 'msgBox');
html.appendChild(panel);
```

第一行DOM（文档对象模型）的用法，``document.querySelector``选择元素并定义变量。

第三行到第五行新建一个html下div且class值为``msgBox``的元素块，第三行新建，第二行指定class类型名，第三行添加到html子元素下。

```
panel.textContent = 'This is a message box';
```

``xxx.textContent``对xxx元素赋值。

```
closeBtn.onclick = function() {
  panel.parentNode.removeChild(panel);
}
```

对用xxx的上一级删去xxx，

### 对象

JavaScript中一切都是对象。

``this``关键词

```
var person = {
  firstName: "Bill",
  lastName : "Gates",
  id     : 678,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// 显示来自对象的数据：
document.getElementById("demo").innerHTML = person.fullName();
```

``this``相当于名义上的``person``，可以使用``this == person``和``this === person``在fullName函数内测试，均为``true``

### 事件



  

















## 其他问题



### 加载问题

由于JavaScript需要对HTML元素加载之后使用，所以对于JavaScript在文档头（加载HTML文档之前）引用存在隐患。

所以对于这种情况**内联**需要加入监视器

```
document.addEventListener("DOMContentLoaded", fuction() {

}
```

它可以监听浏览器的``DOMContentLoaded``事件（HTML文档体加载完毕、解释完毕事件），这样就能规避问题。

**外联**则是添加了``async``的“异步”属性解决问题。

当然也可以直接放到底端（``</body>``之前），但是这种只有在HTML DOM加载完才会到JavaScript，对于存在大量JavaScript的实现很不利。

**async与defer**

* async：适用于引用不同的js但相互独立情况下，且无依赖。
* defer：按照脚本在页面的书写顺序加载和运行。



### null与undefined

``null``数据类型是对象，值为null，``undefined``值和数据类型都是``undefined``。

``null``与``undefined``值相等，但是数据类型不同，（null就像是bug一样难缠）



### let与var

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var#%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var#变量提升)



## 参考

> 《JavaScript高级程序设计第三版》
>
> https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript
>
> https://www.w3school.com.cn/js/index.asp













