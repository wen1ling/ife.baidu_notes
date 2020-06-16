# JavaScript学习

_基础二_

## 数据类型

* null：数据类型为对象(Object)，相当于bug。
* undefined：没有值的变量，数据类型也为undefined。
* const：与let相似，但不能重新赋值，相当于全局声明。

特殊：

* NaN（非数字）

* 数组迭代：

  * ``array.forEach()``为每个数组元素调用一次函数，而函数除value还可以包括``index, array``。

  ```
  let array = [5, 10, 15, 20], txt = "";
  array2 = array.forEarch(add5);
  function add5(value) {
  	txt = txt + value + "<br>";
  }
  ```

  * ``array.map();``：返回新数字
  * ``array.filter();``：通过测试元素的数组
  * ``array.reduce();``：运算
  * ``array.every();``：测试元素的数组
  * ``array.indexOf();``搜索元素值返回位置



**转换**：

```
test.toString();					//适用于数字、布尔值、数组转字符串。
number.toFixed(length);				//规定数字转字符串后的返回位数
number.toPrecision(length);			//规定数字转字符串后的指定长度

parseInt(test, 16);					//转换成数字。后面规定输入的进制。输入只能为正整数
parseFloat(test);					//输入可为小数，根据小数点做断点。
//强制类型转换
Boolean(test);
Number(test);
String(test);
string.split("");
```

**操作**

```
string.length;							//长度
string.indexOf(test,start);				//从string查询test首次出现的位置
string.lastIndexOf(test,start);			//倒着查询文本索引
string.search("test");					//与上面类似，但可以使用正则
string.slice(start,end);				//提取字符串
string.substr(start,length);			//提取字符串
string.replace(oldString,newString);	//替换，可使用正则
string.toUpperCase();					//转化为大写
string.toLowerCase();					//转化为小写
string1.concat(" ",string2);			//连接字符
string.trim();							//去除两端空白符，推荐使用正则的replace()代替
string.charCodeAt(index);				//返回字符串索引位置为index的unicode编码


array.length;
array.pop();							//删除最后一个元素
array.push(new);
array.shift();							//删除数组首个元素
array.unshift(new);						//数组开头添加新元素，返回结果为长度
Array.isArray(test);					//判断是否为数组
array.join(" ");						//将数组连接为字符串，可以规定分隔符
array1.concat(array2,array3);			//连接数组
array.sort();							//排序
array.reverse();						//反转数组
```



**正则表达式**

一般常用于``search()``和``replace()``。W3C总结的正则不推荐，太过于琐碎。

通用语法为``/正则表达式/修饰符``

```
//修饰符
i								//大小写不敏感
g								//全局匹配
m								//多行匹配
//正则表达式
[A-z]							//查找A-Z和a-z的所有字符
[^abc]							//查找不存在abc的字符
(x|y)							//
\w								//查找单词字符
\W								//查找非单词字符
\d								//查找数字
\D								//查找非数字字符
\s								//查找空白字符
\S								//查找非空白字符
\b								//查找单词开头/结尾字符
\0								//查找NULL字符
\uxxxxx							//查找十六进制数xxxxx规定的unicode字符
n+								//匹配至少一个n字符
n*								//匹配零个或多个n字符
n?								//匹配零个或一个n字符
n{x,y}							//查找包含x到y个n序列的字符串
n{x,}							//查找至少x个n的字符串
n$								//查找以n结尾的字符串
^n								//查找开头为n的字符串
```



## 对象

this在对象内为该对象拥有者，可以当作调用了该对象。

```
let car = {
	color:"black",
	name:"Bob",
	all:function() {
		return this.name+"is"+this.color;
	}
};
console.log(car.all());				//记得是objectName.methodName()
```

访问对象有Getter和Setter方法

* Getter

  ```
  let car = {
  	color:"black",
  	name:"Bob",
  	get test() {
  		return this.name+"is"+this.color;
  	}
  };
  console.log(car.test);
  ```

* Setter

  ```
  let car = {
  	color:"black",
  	name:"Bob",
  	set test() {
  		return this.name+"is"+this.color;
  	}
  };
  console.log(car.test);
  ```

  

## DOM

在DOM中，HTML所有元素被定义为对象，可以操作DO密度方法（添加/删除等）和属性（改变文本等），

如``document.getElementById("test").innerHTML = "This is a test"``中，``getElementById``是方法，``innerHTML``是属性。

**查找方法**

```
document.getElementById("test");						//通过id查找元素
document.getElementsByTagName("test");					//通过标签名查找元素
document.getElementsByClassName("test");				//通过类名查找元素
document.querySelectorAll("element.className");			//通过查找CSS选择器的元素
//使用这种方法根据选择器进行修改，如id用element#className
```

对于多个匹配结果可以用下面对n进行修改进行索引。

```
let x = document.querySelectorAll(xxx.xx);
console.log(x[n].innerHTML);
```



**改变HTML元素**

```
element.innerHTML = "test";						//改变元素内容
element.attribute = "test";						//改变元素属性
//element.src = "123.jpg";
element.setAttribute(attribute,value);			//改变元素属性值
element.style.property = new style;				//改变元素样式
//element.style.color = "blue";
```

**添加或删除元素等**

```
document.createElement();							//创建HTML元素
document.removeChild();								//删除HTML元素
document.appendChild();								//添加HTML元素
document.replaceChild(new,old);						//替换HTML元素
document.write();									//写入HTML，一般用于测试
document.className = " "							//定义class属性名称
```

范例

```
let test1 = document.createElement("p");
let testContent = document.createTextNode("测试文本");
test1.appendChild(testContent);
let test2 = document.getElementById("div");
test2.appendChild(test1);
//添加到开头
let test1 = document.createElement("p");
let testContent = document.createTextNode("测试文本");
test1.appendChild(testContent);
let test2 = document.getElementById("div");
test2.insertBefore(test1, test2);
```





**node**

```
let test = document.getElementById("test").innerHTML;
```

等同于

```
let test = document.getElementById("test").firstChild.nodeValue;
```

等同于

```
let test = document.getElementById("test").childNodes[0].nodeValue;
```

``nodeName``规定节点名称，元素为标签名，属性为属性名称，

``nodeValue``规定节点值，元素节点为内容，









## 常用

**日期**

```
let time = new Date();
test = new Date(year,month,day,hours,minutes,seconds,milliseconds)	//指定日期
time1 = time.toString();
time2 = time.toUTCString();					//UTC时间格式字符串
time3 = time.toDateString();				//转化为更易读的格式
//格式化日期
time4 = "YYYY-MM-DDTHH:MM:SS"				//T为分隔符,ISO日期
time5 = "day/month/year"或"year/month/day"	//短日期
time6 = "month day year"或"day month year"	//长日期
time7 = "week month day year "				//完整日期
//获取
time.getDate();								//返回日
//其他类似，getHours范围为0-23，month范围为0-11，getDay()返回星期几(0-6)
time.setMonth();							//设置月，set类似设置日期
```

**Math**

```
Math.PI;
Math.round(test);				//返回四舍五入后的整数
Math.pow(x,y);					//x的y次幂
Math.sqrt(x);					//返回x的平方根
Math.abs(x);
Math.ceil(x);					//返回x上舍入的整数，Math.floor();返回下舍入整数
Math.sin(x);					//三角函数，cos、tan等等
Math.min(test);					//返回test列表内最小值，max等等
Math.randowm();					//返回0到1之间的随机数(不包括1)
Math.log();

```



































