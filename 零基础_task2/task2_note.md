# HTML及其语义化

部分常用HTML标签不再记录，由于MarkDown语法易与html冲突，省去部分字符。部分不推荐使用或者浏览器支持率过低的不再记录。

**HTML全局属性**：class类名、id、style行内样式、title等。[W3C参考](https://www.w3school.com.cn/tags/html_ref_standardattributes.asp)

**HTML的style属性**：一种通过在HTML中使用改变HTML样式的方法，

```
<p style="font-family:arial;color:blue;font-size:16px;">style实例</p>
```



## 文档声明

HTML5

```
<!DOCTYPE html>
```

XHTML 1.0

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

HTML 4.01

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
```

## 头部

* link 

```
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
插入网站图标
<link rel="stylesheet" href="my-css-file.css">
插入css文件
<script src="my-js-file.js"></script>
插入js文件
```

### lang 语言

不仅是

```
<html lang="en-us">
```

很多标签例如span单设置每一部分内容语言也可以。

框架

```
<head>
<title>文档标题</title>
<base href="url/" />                   
<base target="_blank" />                 页面所有连接默认地址及目标
<link rel="stylesheet" type="text/css" href="xxx.css" />    链接外部样式表
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  HTML4编码
<meta charset="utf-8">                     HTML5编码
<meta name="description" content="描述" />
<meta name="keywords" content="关键词" />  
页面信息,name还有author、application-name、generator
<meta http-equiv="Refresh" content="5;url=http://url" />
<meta http-equiv="Content-Language" content="zh-cn" />

</head>
```

除上面还有script脚本、style样式信息.

## 部分文本标签

```
<hr />                    水平线分隔文章不同内容
<br />					  换行
<em></em>                 斜体，语义化为侧重点的强调
<strong></strong>         内容重要性，渲染为粗体
<i>/<i>                   斜体，语义化可搭配class/lang，表示名词，外来语等
<b></b>                   粗体，语义化为需要引起注意的内容，搭配class
<small></small>           小号，语义化声明、注意事项等
<s></s>                   删除线，表示不再相关的内容，例如现价与原价
<u></u>                   下划线，用于专有名词、错误内容、标注的内容
<sub>上标、<sup>下标
<code>代码片段</code> <samp>程序的输出</samp>
<kbd>输入内容/按键</kbd>  <mark>相关内容，高亮显示</mark>     
<del>与<ins>                    datetime与cite，用于记录文档修改
<pre></pre>                    等宽显示，适用于代码片段，
<abbr title="需要显示的全称">缩写</abbr>     对缩写内容提示全称
```

```
<p> <cite>署名</cite>:<p><blockquote cite="url">长的引用</blockquote> </p>
```

blockquote更利于语义化规范，换行且增加外边距，q标签的短引用与之类似。

cite标签常用于参考文献、引用，有隐藏功能，可作为脚注或独立文档。

```
<address>Written by <a href="https://github.com/wen1ling">wen1ling</a></address>      
定义文档或者文章作者/拥有者联系信息，通常为斜体，前后自动添加折行，被包含在<footer>元素
<bdo dir="rtl">文本从右向左输出</bdo>      dir取值:ltr左倒油，rtl由到
```

```
<dfn><abbr title="">某个名词</abbr></dfn>     附近存在这个名词的定义
<ruby>汉字<rp>(</rp><rt>拼音</rt><rp>)</rp>          显示汉字及其拼音，标示
<span class=""></span>            有选择不应该选择这个
```

### 计算机代码更好的展示方式

* code 标记通用代码
* pre 严格的格式，通常是代码块（通常是作为大块，包括其他几个）
* var 标记变量名
* kbd 标记键盘输入（例如linux命令行）
* samp 标记计算机的输出

```
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('噢，噢，噢，别点我了。');
}</code></pre>

<p>请不要使用 <code>&lt;font&gt;</code> 、 <code>&lt;center&gt;</code> 等表象元素。</p>

<p>在上述的 JavaScript 示例中，<var>para</var> 表示一个段落元素。</p>


<p>按 <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd> 选择全部内容。</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

### 时间与日期

不仅一种格式，设置更多是为了被抓取

```
<time datetime="2016-01-20">2016年1月20日</time>
```



## a

```
<a href="url" download"定义文件名称" media="" target="_blank"></a>
<a href="mailto:xxx.xx">邮箱链接</a>   
邮箱链接后面可加，?cc=收件人&bcc=密文抄送人&subject=主题名称&body=内容来去预设发送邮件内容。
<a href="url"><img src="xxx.xx" /></a>   图像作为链接
```

download部分浏览器不支持，target:blank新窗口打开、self当前界面打开、parent父框架打开、top整个窗口打开,更多用frameset代替

锚的实现，如下

```````
<a href="#xx_id">href实现锚</a>
<div id=xx_id>要链接当前页面的位置</div>            id也可以换为name
```````

## img

```
<img src="url" alt="可替换文本" height="" width="" />
```

 alt为空字符串为装饰图，alt非空图为文档一部分，无alt则为无等价文本内容可用

`<img />      当需要src为空时正确写法，避免重复载入`

### 关于图像映射

* ismap   服务器端图像映射，点击某处通过服务器端响应

```
<a href="服务器端程序"> <img src="" ismap />   </a>
```

* usemap  客户端图像映射

```
<img src="xxx.xx" alt="xx" usemap="#xx /">
<map name="xx">
  <area href="url" shape="" coords="位置" alt="">      
</map>
```

**关于area标签**，必须alt替代文本，也有target属性，位置与形状选择如下

```
shape="circle", coords="x,y,r"      圆形，x,y圆心位置,r半径
shape="rectangle", coords="x1,y1,x2,y2"   矩形，两个成对角的点坐标，可简写为rect
shape="polygon", coords="x1,y1,x2,y2,等等"   多边形，每个坐标应该顶点，过于繁琐。
```

### css关于图片的响应式设计

通过css的设计来去应对不同分辨率导致的图片效果不好的现象，

```
<meta name="viewport" content="width=device-width">    强制手机浏览器真实窗口加载
```

1. 根据分辨率

```
<img srcset="xxx-1.jpg 320w,
             xxx-2.jpg 480w,
             xxx-3.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
```

2. 使用css预定宽度，然后srcset用倍数放大或缩小

```
<img srcset="elva-fairy-320w.jpg,
             elva-fairy-480w.jpg 1.5x,
             elva-fairy-640w.jpg 2x"
     src="elva-fairy-640w.jpg" alt="Elva dressed as a fairy">
css文件
img {
  width: 320px;
}
```

3. 大胆使用picture，当分辨率大于599px选择一个图片，小于600px，选择另一种小的，为避免存在599-600px之间的图片，img作为备用（不可删去，避免问题发生），

```
<picture>
<source media="(max-width: 599px)" srcset="xxx.jpg">
<source media="(min-width: 600px)" srcset="yyy".jpg">
<img src="yyy.jpg" alt=" "/>
</picture>
```



## 表格

```
<table border="">
<caption>标题</caption>
<thead>
<tr> <th>0.0</th> <th>0.1</th> </tr>
</thead>
<tbody>
<tr> <td>1.1</td> <td>1.2</td> </tr>
<tr> <td>2.1</td> <td>2.2</td> </tr>
</tbody>
<tfoot>
<tr> <td>3.1</td> <td>3.2</td> </tr>
<tr> <td>4.1</td> <td>4.2</td> </tr>
</tfoot>
</table>
```

表格可内嵌表格、列表、段落等等，

表头th一般粗体居中，空单元格一般加个空格进行占位，标题caption居中可选

thead页眉，tbody主体，tfoot页脚存在align和valign对齐方式（top、middle、bottom、baseline基准线）推荐使用，便于使用css样式

```
<table border=" " cellpadding=" " cellspacing=" ">
border边框宽度，cellpadding单元格边与内容宽度，cellspacing单元格之间宽度
推荐css设置上述属性
```

```
<colgroup>
<col span="" style=" "></col>
</colgroup>
一般col控制样式用上述形式，列为单位数
```

## iframe

```
<iframe src="" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```

可用于引入其他网站的内容到自身网页上。

allowfullscreen全屏模式，frameborder框架与其他框架之间的边框（不推荐），sanbox提高安全性，

**使用javascript设置iframe的src可以尽快被使用，减少加载实践。**



## 嵌入多媒体文件等

### embed

```
<embed type="video/quicktime" src="xx.mov" width="640px" height="400px" />
```

### object

```
<object date="application/pdf" data="/xx.pdf" width="250px" height="200px">
</object>
```

### audio 音频文件

autoplay自动播放，controls提供控制面板，loop布尔属性，循环，preload

volume音量设置0-1，

```
<audio autoplay>
<source src="xxx.mp3" type="audio/mp3">
<source src="xxx.ogg" type="audio/ogg">
</audio>
```

### video 视频文件

autoplay自动播放，loop循环播放，preload缓冲方式（none不缓冲，auto界面加载后缓存，metadata仅缓存文件元数据）

```
<video controls>
<source src="xxx.mp4" type="video/mp4">
<source src="xxx.webm" type="video/webm">
</video>
```

### MIME类型

即为嵌入元素的type。仅提供部分，

* **音频与视频类**
  * ogg：audio/ogg（仅有音频的ogg文件），video/ogg（包含视频/音频的文件），application/ogg（不指定内容的ogg文件）
  * mp4：video/mp4，
  * mp3：audio/mpeg
  * wav：audio/wave，audio/wav，audio/x-wav，audio/x-pn-wav。
  * flac：audio/flac，audio/x-flac
  * avi：video/avi
  * 等等

* **图像类**
  * image

* **字体类**
  * application/font-off、application/font-ttf等等，

* **其他**
  * zip，application/zip、appliication/x-gzip
  * pdf，application/pdf
  * JavaScript，text/javascript、application/javascript



## 其他

**列表**:无序列表ul与有序列表ol，

```
<ul> <li>1</li> <ol> <li>x1</li><li>x2</li> </ol> <li>2</li> </ul>
浏览器支持type属性，但推荐css的list-style-type代替。value表示该列表序号值
```

**框架frameset与iframeset**

```
<frameset clos="x,y">
   <frame src="url1">
   <frame src="url2">
</frameset>                  frameset的clos与rows定义如何划分区域
```

**dt、dd、dl**

```
<dl> <dt><dfn></dfn></dt> <dd class=""></dd> <dd></dd>  </dl>
```

常用于术语定义、元数据、FAQ等

**图片等流内容figure**

常用于图片、图表、插图、代码。

```
<figure>
<img src="xxx.xx" alt="" title="" width="" height="" />
<figcaption> 图片标题 </figcaption>
</figure>
```

**div与span**

div块元素，本身无含义，但会显示折行，易于与CSS设置样式属性

span可作为文本容器

## 语义化

参考[顾轶灵](http://justineo.github.io/slideshows/semantic-html/#/)，除上面标签，这是一些更好实现语义化的类型

ARIA、无障碍网站——role

元素+属性+属性值

id与class：id引用，应与语义处理无关，class则推荐去描述处理的内容

利用全局属性去进行语义处理，描述它隶属于什么，如img标签的title更多的并非是文件名称，而是图像链接的内容简单描述等信息

```
rel="alternate stylesheet"          link+rel可替换样式表fixfox的Try it in firefox
rel="prev",rel="next"                
rel="icon"                      文档的外部资源
```

**ARIA(无障碍富互联网应用)**通过role属性实现，例如role="checkbox"

存在状态(必须修改的)和属性值（不太可能修改的），在使用role时，不要过度使用，避免已经隐含role的元素重复使用，如必须定义，采用嵌套方式，一般类似于input、dd等明确的不能使用

## HTML5规范

**HTML5布局**

```
<body>
<header> <h1></h1> </header>          通常为介绍内容的头部，如文章的标题
<nav>		                          大型导航链接块，类似于菜单栏
<form> </form>						  搜索栏
</nav>
<main>								主内容区
<article>
</article>
<aside>
</aside>
</main>
<footer> </footer>	                页脚，作者、版权信息、联系信息等等
</body>
```

内容块区

```
<section> </section>              定义节，相当于带有主题的内容组
<article></article>               相当于网站其他内容较为独立，例如博客文章、新闻
<aside></aside>					  主内容之外内容，如侧栏，
```



**推荐的标签**

```
<figure>
<img src="" alt="" width="" height="" />
<figcaption>图像标题</figcaption>
</figure>
<details></details>                     定义用户可查看的隐藏的细节
<mark></mark>                           需要强调的文本
<summary>                               定义<datail>的可见标题
<main role="main">  </main>             主内容，可用id跳过导航
<time class="" datetime="YYYY-MM-DDThh:mm:ssTZD"> </time>年月日T时分秒时区
```

```
<footer> <nav><p><a href="url">a</a></p></nav> <p>Copyright</p> </footer>
address(联系人信息)
```

**HTML5头部**

```
<!DOCTYPE html>
<html lang="zn-CN">
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="xxx.css">
<script src="xxx.js">
<title></title>
</head>
<!-- 注释 -->
</html>
```



## 部分要点

* web语义化：内容的不断增长，机器很难去读取这些内容是什么，人工智能或许会能够无须这样就能实现，但是还需要时间，而更好的方式是把这些内容的关系交给提供者，这样机器就能快速理解并以最好的方式去呈现它，而语义化就是这样一种路径。它的作用是什么呢，举个例子，当你去用百度搜索获取答案时，你更希望第一个内容就是所需要的。“允许跨应用程序、企业和团体对数据进行分享和重用。”
* 相对路径与绝对路径、不同浏览器对于不同标签的支持。
* HTML新规范带来的布局方式，更好的去实现语义化。
* 良好的代码规范以及注释的运用。

## 参考内容

* [顾轶灵](http://justineo.github.io/slideshows/semantic-html/#/)
* [W3C](https://www.w3school.com.cn/index.html)

* [MDN](https://developer.mozilla.org)

















