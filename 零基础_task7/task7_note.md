# 布局

_这里包括常用的网站布局方式。_

归纳的布局目前大多都是在绝对定位absolute、负边距margin、浮动float基础上布局，而对于不考虑IE6、7的情况下，很多新标准可以快速的布局，如flex、BFC、grid等等。

## 左边固定+右边自适应

参考https://segmentfault.com/a/1190000010698609，定义各区块为main、left、right，

默认状态：

```
.main {
	padding: 15px, 20px;
	border:1px solid black;
}
.left {
	width: 120px;
	border: 5px solid gray;
}
.right {
	margin-left: 20px;
	border: 5px solid gray;
}
```



###双inline-block：

```
.main {
	box-sizing: content-box;
	font-size: 0;
}
.left, .right {
	display: inline-block;
	vertical-align: top;
	box-sizing: border-box;
}
.right {
	width: calc(100%-140px);
}
```

如标题意思，两边都是inline-block，使用box-sizing是为了方便计算。

####tips

box-sizing参考[MDN的box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)，content-box中width、height仅为宽高，border-box中width和height加入了内边距padding和边框border。

### 双float

```
.main {
	overflow: auto;
	box-sizing: content-box;
}
.left, .right {
	float: left;
	box-sizing: border-box;
}
.right {
	width: calc(100% - 140px);
}
```

和双inline-block类似，还是计算宽度，少了inline-block等等（~~废话~~）。记得清除浮动。

### float+margin-left

```
.main {
	overflow: hidden;
}
.left {
	float: left;
}
.right {
	margin-left: 150px;
}
```

很常规的方法，浮动让两个块在同一列，margin-left控制位置。

### absolute+margin-left

```
.left {
	position: absolute;
}
.right {
	margin-left: 150px;
}
```

基本上和float+margin-left异曲同工，但是很鸡肋，左边过高就容易出块。（记得父元素设置position）

### float+BFC

```
.main {
	overflow: auto;
}
.left {
	float: left;
	margin-right: 20px;
}
.right {
	margin-left: 0;
	overflow: auto;
}
```

很舒适的方案，

#### tips:

[BFC](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)(Block Formatting Context，块格式化上下文)：  具有BFC特性的元素可以看作隔离的独立容器，容器内的改动不会影响外面元素。包括的元素参考BFC链接。

### flex

```
.main {
	display: flex;
	align-items: flex-start;
}
.left {
	flex: 0 0 auto;
}
.right {
	flex: 1 1 auto;
}
```

很好的方案，对IE6、7不太友好，

### grid

```
.main {
	display: grid;
	grid-template-columns: 120px 1fr;
	align-items: start;
}
.left, .right {
	box-sizing: border-box;
}
.right {
	grid-clomun: 2;
}
```

#### tips:

grid参考：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid)、[阮一峰](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## 三列式

### 圣杯(Holy Grail)

HTML不具体写了，main大框架，center、left、right子div，class属性都为column。

```
#main {
	padding-left: 200px;
	padding-right: 150px;
}
.column {
	positive: relative;
	float: left;
}
#center {
	width: 100%;
}
#left {
	width: 200px;
	right: 200px;
	margin-left: -100%;
}
#right {
	width: 100%;
	margin-right: -150px;
}

/*** IE6 ***/
* html #left {
	left: 150px;
}
```

很奇妙，很规整的布局，center正常，l但父块级main使用padding给左右留空间，先``float:left``让块消去padding影响好相互临近，left用``margin-left: 100%``使之与center同一起始点，然后使用相对定位移到center左边，right浮动到一块，直接``margin:right: -150px;``即可。可以说是很容易修改就能有良好的适应性的布局。

此基础上，填充更为容易，修改width、padding、right即可，而等高的列main使用``overflow: hidden;``和column使用``padding: 1001em; margin-bottom:-1000em;``即可。

参考[这个](https://alistapart.com/article/holygrail/)，更为详细。值得一看的是[这个圣杯版本](https://alistapart.github.io/code-samples/holygrail/example_4.html)

### 双飞翼

### float

较为基础，懒得写了

























