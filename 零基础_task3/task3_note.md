# CSS初级

部分不常用或浏览器支持较少的不再记录。

层叠样式表(Cascading Style Sheets)，解决内容与变现分离。

选择器{属性:值; 属性:值;}，属性和值并称声明  

## 插入样式表方式



**外部样式表** 在HTML文件外新建css文件使用

```
<link rel="stylesheet" type="text/css" href="css路径">
```

**内部样式表** 在HTML头部的style标签内定义

```
<style type="text/css">
p {color: blue;}
</style>
```

**内联样式表** 在HTML标签内使用

```
<html>
<p style="color: red; font-size: 18px">
红色,18px大小文本
</p>
</html>
```

## 部分属性

### 背景

```
p {background-color: blue;}                背景颜色background-color
body {background-image: url(背景图片路径);}       背景图片background-image
```

**背景重复background-repeat**

repeat默认垂直和水平重复，repeat-x/repeat-y水平/垂直重复，no-repeat仅显示一次，inherit从父元素继承属性。

```
body {background-image: url(背景图片路径); background-repeat: repeat;}
```

**背景定位background-position**

有两个值，仅定义一个，默认另一个为center，第一个为水平位置，第二个为垂直位置。

第一个可用top/center/bottom/x%/x px，第二个可用left/center/right/x%/y px。

```
body {background-image: url(背景图片路径); background-position: center;}
```

**背景滚动background-attachment**

设置笔记固定或随页面而滚动，scroll默认，随着页面而滚动，fixed固定。

```
body {background-image: url(bgimage.gif); background-attachment: fixed;}
```

### 文本

****

#### 颜色color

颜色可用颜色名称、16进制值、rgb代码值。

```
p {color: blue;}
```

背景颜色如上，background-color。

#### 缩进text-indent

一般可以为块级元素应用，无法用于行内元素，行内元素可用内外边距实现。

常用可有有em、%、或是继承，可为负值。

```
p {text-indent: 5em;}
```

#### 水平对齐text-align

可选left、right、center、justify(两端对齐)，**两端对齐**会影响单词和字母间隔。

**text-align:center与center**：前者作用于内容，影响文本，后者作用于元素。

```
p {text-align: center;}
```

#### 字体样式font-style

可用italic(斜体)、oblique(倾斜)、normal(默认)。

```
p {font-style: normal;}
```

倾斜字体为正常竖直字体的一个倾斜版本。

#### 水平线修饰text-decoration

有关于水平线的修饰，下划线underline、line-through删除线、上划线overline。

常在头部用来去除链接a的下划线。

```
p {text-decoration: underline;}
```

#### 大小写转换text-tranform

改变文本的大小写，none标准文本，capitalize文本每个单词大写字母开头，uppercase大写，lowercase小写。

```
p {text-transform: none;}
```

#### 文本方向direction

ltr从左到右，rtl右到左，

```
p {direction: rtl;}
```

#### 行间距line-height

可用数字、百分比等，

```
p {line-height: 100%;}
```

#### 间隔

**字间隔word-spacing**

改变字/单词间的间隔，默认值normal与设置为0一样，可设置为px、em等等。

```
p {word-spacing: 25px;}
```

**字母间隔letter-spacing**

改变字母间的距离，与字间隔word-spacing差别在于单词与字母之类。同样可为px、em等等。

```
p {letter-spacing: 25px;}
```

#### 不换行white-space

可选nowrap(不进行换行，直至br/)、

```
p {white-space: nowrap;}
```





### 字体font-family

* 目前尚未有一种方法确保web一致的使用一种字体。通用字体包括Serif、Sans-serif、Monospace、Cursive、Fantasy这五种系列。通用字体外可自行设置，但推荐保留一个通用字体，避免用户代理无此字体。
* 推荐使用规则：UTF-8编码，lang为zh-CN，尽量指定通用字体，font-family推荐Arial, sans-serif，,GBK去掉sans-serif，西文字体在中文前，平台特有字体在通用前，generic family最后，特殊字体加引号。

使用link为当前网页添加字体，

```
<link href="https://fonts.font.im/css?family=Open+Sans" rel="stylesheet" type="text/css">
```



#### 字体样式font-style

可用italic(斜体)、oblique(倾斜)、normal(默认)。

```
p {font-style: normal;}
```

倾斜字体为正常竖直字体的一个倾斜版本。

#### 文本大小font-size

可用xx-small、medium、xx-large、smaller、larger、%、固定值。

```
p {font-size: 25px;}
```

W3C推荐em单位，如果默认为16px，px/16=em，即为换算公式。

#### 字体粗细font-weight

可用normal、bold、bolder、lighter、固定值。400相当于基本默认，700相当于粗体。

```
p {font-weight: normal;}
```



## 选择器

### 基本的

直接通过某个html标签设置，如body、p、h1等等。

通过,进行分组一起显示

```
h1, h2, h3, h4, h5, h6 {
  color: gray;
  background: white;
}
```



### 类选择器

```
<p class="important">xxx</p>
<p class="important warning">xxxxx</p>
在css文件内可用以下类似表述
p.important {color: red;}
p.warning {background: silver;}
.important.warning {font-weight: bold;}
*.important {color: red;}
.important {color: red;}
```

### id选择器

id定义的名称只能用一次，不能使用class的词列表，区分大小写。

```
<p id="p_blod">xxxx</p>
在css文件内
#p_blod {font-weight: bold;}
```

### 属性选择器

根据元素属性及属性值选择，~=根据属性值某个词进行选择

```
css中   
a[href][title] {color: red;}
a[href="yyy"] {color: blue;}
a[href*="xxx"] {color: blue;}    *=包含字符串，$=以字符串结尾的，^=以字符串开头。
html中
<a titile="  " href="   ">xxxx</a>
<a href="yyy">xxxx</a>
```

### 后代选择器

选择某标签后代的标签，

```
html中<p>xxxxx<s> <em>xxxx</em> <s>xxxx </p>
css中，
p em {color: red;}
```

### 子元素选择器

与后代选择器类似，但会根据顺序选择，非顺序不会应用。

```
h1 > strong {color: red;}
css中
<h1>the <strong>123</strong> 123</h1>

```

### 相邻兄弟选择器

选择紧接前一个元素出现的地方，后一个元素显示样式

```
<ul> <li>zx</li> <li>zxzx</li> <li>zxzxzx</li> </ul>
css中
li + li + li {color:red;}           最后第三个li会出现红色。
```





## 响应式设计

RWD(Responsive Web Design)即为响应式设计，可以根据尺寸改变，

更多的核心是使用固定尺寸而非百分比

* 使用自己创建的
* 使用框架，例如Bootstrap