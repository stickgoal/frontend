# css

### 基本语法

选择器{

​	属性:属性值;

​	...

}

### 属性

- font-size 字体大小
- font-family 字体 
- font-weight 粗细 normal bold bolder 100-900
- font-style    字体风格   italic normal
- 
- color 字体颜色 
- height 高度
- text-transform 文本转换
- text-decoration 文本装饰 underline overline line-through
- text-shadow  文本阴影
- text-align 文本对齐
- text-indent 文本缩进
- background-image 背景图像
- background-color  背景颜色
- background-repeat 重复
- background-position 背景定位 left



### 选择器

- 标签选择器    ： h1  form

- 类选择器： .ppt

- 属性选择器： [action]

- 分组选择器： h2,p

- 兄弟选择器：div+p

- 后代选择器：#main img

- ID选择器： #main

- 直接子元素选择器：.form-action>p

  ```html
  <html>
      <head>
          <style>
          	
          </style>
      </head>
      <body>
          <div id='container'>
              <div>
                  <p>
                      <span class="abc"></span>
                      <label class="abc"></label>
                  </p>	
              </div>
              <a href="aaa" class="abc">alink</a>
              <p>
                  <span></span>
              </p>
              <div>
                  <span></span>
              </div>
              <a>abc</a>
          </div>
      </body>
  </html>	
  ```

  

### 盒子模型

元素 > 内边距 > 边框 > 外边距



### 引入css的方式

- 标签的style属性

``` html
<div style="background-color:blue">
```

- head中的style标签

```html
<style>
	.box{
        ....
	}
</style>
```

- link标签引入外部的样式

```html
<link rel="stylesheet" type="text/css" href="index.css" />
```

