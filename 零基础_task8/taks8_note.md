# 布局

_还是布局问题的笔记_

## 列表

简单的横向列表现在已经有很多可用的方法，

* ``float: left;``：ul正常，li使用``float:left;``，块级元素所以可以切换列表样式和边距。
* inline-block和block联合使用：ul使用block，li使用inline-block，再加入一个元素span/a使用block包裹真正的列表内容即可，对a等有很好的适应性，修改列表各项大小时改height、width、line-height即可，（三者相等时候列表各项即可垂直居中）



## 图片

对于不同尺寸的图片在展示时候想要更加美观，就必须让他们在一个同等大小的块里面，现在有很多的可用方法。

* ``display: table-cell``：html使用ul、li、div、img即可，ul``display: table``、清除浮动，li``float: left``、margin，div``display: table-cell``、``vertical-align: middle``、``text-align: center``、固定宽高，即可得到完美的图片布局。
* inline-block，和列表第二个类似，不再赘述。



## table-cell

* 第一种使用自然是上面的不规则图片的使用，
* 还可以用于两栏自适应布局。[参考大佬的案例](https://www.zhangxinxu.com/study/201010/table-cell-two-column-flow-layout.html)

总块的伪类设置

```
.fix:after, .fix:before {
	display: table;
	clear: both;
	content: "";
}
```

左边使用了a进行``float: left``，右边内容区设置``display: table-cell;``即可，IE6/7可以使用display:block代替。总体上来说为``display: table-cell; *display: inline-block``

参考[MDN的content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content)

* 利用table进行等高布局，麻烦的是table、table-row、table-cell都需要定义，对于不支持``display: table-cell``需要使用负值，参考[几种displaytable-cell的应用]([https://www.zhangxinxu.com/wordpress/2010/10/%E6%88%91%E6%89%80%E7%9F%A5%E9%81%93%E7%9A%84%E5%87%A0%E7%A7%8Ddisplaytable-cell%E7%9A%84%E5%BA%94%E7%94%A8/](https://www.zhangxinxu.com/wordpress/2010/10/我所知道的几种displaytable-cell的应用/))，
* 对于浮动的备用方案[案例](https://www.zhangxinxu.com/study/201010/table-cell-list-flow-layout.html)















> [display:table-cell]([https://www.zhangxinxu.com/wordpress/2010/10/%E6%88%91%E6%89%80%E7%9F%A5%E9%81%93%E7%9A%84%E5%87%A0%E7%A7%8Ddisplaytable-cell%E7%9A%84%E5%BA%94%E7%94%A8/](https://www.zhangxinxu.com/wordpress/2010/10/我所知道的几种displaytable-cell的应用/))















