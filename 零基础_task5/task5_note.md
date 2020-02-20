# CSS

##基础

首先元素总体上分为**块级元素**和**内联元素**，默认情况块级内容宽度是父元素100%，并内容一样高，可以根据盒模型（参考下面）布置，而内联元素宽高根据内容而定，可以通过``diplay:``进行转换。正常的布局流，块级元素垂直布局，内联元素在足够的父块级宽度会在同一行布局，如果没有空间会移到新行。

## 盒模型

如W3C图，规定了内外边距、边框以及元素宽高的方式。

![ct_boxmodel](ct_boxmodel.gif)

**内边距padding**，可按照上、右、下、左的顺序设置内边距，也可统一设置。

```
div {padding: 10px 10px 10px 10px;}
div {padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;}
```

**外边距margin**，和内边距padding一样，可简写可分别设置。

**外边距折叠**：当两个块级外边距相邻的边宽/高一致时，两者之间仅留外边距较大者，（但是行内框、浮动框或相对定位不会存在合并）

**外边距折叠解决方法**：``overflow: hidden``



## 浮动布局float

简而言之，就是框可以移动，直到触碰框的边缘，为float属性。

如果一行内浮动空间较少，会跳至下一行，直到足够空间。

```
ul {float: left; }
ul {float: left; clear: both;}      可用来控制浮动，clear可有left、right、both几种选择。
```

对于设置菜单栏、不同内容并列的块都有很好效果。

默认情况下浮动就像是一个框接着一个框，由于分辨率不同，所以不同分辨率可能有着不同的效果。

**清除浮动**

* 如上，``clear:both``清楚浮动，none允许两边都有浮动，both都不运行有浮动，left不允许左边有浮动。

* clearfix hack清除浮动，块之间一致。（IE6只需zoom:1;）

```
.clearfix {overflow: auto;}
```

* 百分比布局

```
nav {float: left; width: 25%;}
section {margin-left: 25%;}
```

* inline-block形式实现浮动：这种方式后面的不再需要使用clear清除浮动。

```
.box{display:inline-block; width:200px; height:100px; margin:1em;}
```

* 媒体查询

通过响应式设计针对不同浏览器和设备表现不同的显示效果。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries)。

## 定位position

三种基本定位机制：普通流、浮动和绝对定位。

相对定位与绝对定位。

分为几种类型。

* static：静态定位，并没有变化，放入正常的文档流。

* absolute：绝对定位，相对于最近的父元素，left、top、right、bottom。
* fixed：绝对定位，相对于浏览器窗口定位，left、top、right、bottom。
* relative：相对定位，left等等。

```
h2 {position: absolute; left: 100px; top: 150px;}
```

**值得注意的是，如果父元素未定义，即为static，绝对定位会被包含到初始块，相当于以浏览器定位。**

* absolute的clip属性。

```
img {position: absolute; clip: rect(0px,60px,200px;0px);}
```

* z-index属性：堆叠顺序，堆叠高的总是在堆叠低的前面。

```
img {position: absolute; left: 0px; z-index: -1;}
```

* 特别的，黏性定位，在元素跨越某个值前为相对定位，跨越后为固定定位。

```
#one {position: sticky; top: 10px;}
```



## display

转换元素的框的类型。

```
p {display: inline;}           转化为内联元素。
span {display: block;}         转化为块级元素。
```

* none：元素不显示。
* block：显示为块级元素，前后有换行符。
* inline：默认。内联元素。
* table：块级表格。
* inline-block、list-item、inline-table等等。

##  其他

### 伪类与伪元素

与a:link、a:visited、a:hover、a:active类似，可将a换为其他的元素，从而改变样式。

* :link，未被访问的链接
* :visited，已被访问的链接
* :hover，鼠标悬停元素时
* :active，被选择的元素，点击元素到响应的时间
* :focus，拥有键盘焦点的元素，如文本框输入数据时
* :first-child，元素的第一个子元素添加样式

* :lang，为指定lang属性的元素添加样式。

```
q:lang(no) {quotes: "~" "~"}
<q lang="no">引用的文本</q>
```



### 透明度

```
img {opacity: 0.4; filter: alpha(opacity=40);}
```

opacity设置透明度，0.0-1.0，IE8及更早为filter滤镜，filter:alpha(opacity=x)，x可取0-100。

加以伪类，可显示不同的效果。或者加以背景图片。

```
img {opacity: 0.4; filter: alpha(opacity=40);}
img.hover {opacity: 1.0; filter: alpha(opacity=100);}
```



## 其他的东西

* 对齐，可有text-align、margin、position、float几种方式。还有display的table-cell。
* 尺寸，推荐px、em，百分比对于不同分辨率的设备效果各异。





























a