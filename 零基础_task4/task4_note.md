# CSS

## 部分样式

### 链接a:

* a:link 未被访问的链接
* a:visited 已访问过的链接
* a:hover 鼠标指针停留链接上方
* a:active 链接被点击时的状态

一般如上述顺序进行定义，避免定义失效。如下例定义颜色。

```
<style>
a:link {color: red;}       
a:visited {color: gray;} 
a:hover {color: blue;}   
a:active {color: black;} 
```

### 列表list-style

* list-style-type：列表标记类型，包括:disc(实心圆)、circle(空心圆)、square(方形)、decimal(数字)、lower-alpha(小写英文字母)、upper-alpha(大写英文字母)等等。
* list-style-image:  使用图像作为项目标记。推荐使用这个属性时在下面使用list-style-type作为备用选项。

```
ul {list-style-image:url("xxx.gif");}
```

* list-style-position: 设置列表项目的标记在何处，默认outside，inside为在文本以内，且根据标记对齐。

合并属性为list-style，一般包括type、position、image，

```
ul {list-style: square inside url("xxx.gif");}
```

### 边框border

* border边框: 可以同时设置border-width、border-style、border-color属性，

```
table, th, td {border: 1px solid blue;}
```

* border-shadow边框阴影: 水平阴影位置、垂直阴影位置、模糊半径、阴影扩展半径、颜色、inset(改为内部阴影)

```
box-shadow: 10px 10px 10px 5px gray;
```

* caption-side表格标题位置: 可选top、bottom属性

```
caption {caption-side: bottom;} 
```

* border-collapse合并边框属性: separate默认边框分开，collapse合并边框，忽略border-spacing与empty-cells属性

* table-layout表格单元格布局方式，automatic由单元格内容决定，fixed由表格宽度和列宽度决定。

```
table {table-layout: fixed;}
```

* border-spacing相邻单元格边框距离设置，

```
table {border-spacing: 10px;}
```

* empty-cells隐藏表格空单元格边框与背景。hide隐藏空单元格的边框。
* border-top、border-bottom、border-left、border-right，分别设置上下左右的边框的样式，包括color、style(下边框样式)、width(下边框宽度)。

```
p {border-top: blue solid 3px;}
```

* bottom-bottom-style下边框样式属性: 包括dotted(点状)、dashed(虚线)、solid(实线)、double(双线)、groove、ridge、inset、outset(等3D边框)

* border-radius圆角边框: 加上top等等可以单独定义。如border-top-left-radius。

```
border-top-left-radius: 25px;
```



* border-image边框图片属性: 包括source、slice、width、outset、repeat

slice向内偏移量，width宽度，outset超出边框量，repeat(repeat平铺、round铺满、stretch拉伸)。

```
div {border-image:url(xx.png) 30 30 round;}
```

### 轮廓outline

元素周围的一条线，位于边框外围。包括color、style、width属性。

```
p {outline: blue dotted thick;}
```



















































