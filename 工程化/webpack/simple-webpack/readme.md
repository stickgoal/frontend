无配置情况下，webpack寻找src/index.js作为入口，生成main.js

```bash
Hash: 14ff3cf4fc5f2aea9804
Version: webpack 4.30.0
Time: 3242ms
Built at: 2019-04-24 17:09:56
  Asset      Size  Chunks             Chunk Names
main.js  70.4 KiB       0  [emitted]  main
Entrypoint main = main.js
[1] ./src/index.js 271 bytes {0} [built]
[2] (webpack)/buildin/global.js 472 bytes {0} [built]
[3] (webpack)/buildin/module.js 497 bytes {0} [built]
    + 1 hidden module

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'developm
ent' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
```

- 配置文件默认为webpack.config.js，其他文件名不管用
- package.json中配置script， 直接执行npm start映射到webpack
- webpack.config.js 配置参见 [官方文档](https://www.webpackjs.com/configuration/)
	- mode : 打包时的环境
	- entry: 入口
	- output: 输出
		- publicPath: 静态资源文件相对于的路径
	- module: 各种类型的资源如何处理
		- rules定义了何种资源用何种处理器，其中定义了何种文件使用何种loader等
	- resolve: 如何加载资源，import的时候去哪里找到模块
		- modules指定了从哪里找
		- extensions指定了哪些后缀被视为资源
	- plugin: 配置使用的插件，插件是构建过程中的各个具体执行者，[插件列表](https://www.webpackjs.com/plugins/), //TODO 插件是否有类似于生命周期阶段，调用顺序是否完全自定义？
	- devServer: 开发中的服务器
		- before： 提供在server中访问express的app 的功能，可以用来模拟数据
		- hot：true热替换
		- contentBase: 静态内容目录
		- lazy:true 在请求到达时再编译
		- proxy: 将请求转发给后端服务器（可以解决跨域问题？）
		- publicPath:静态资源
	- devtool: 开发工具，生成sourcemap
	- context: 上下文，webpack的主目录
	- target: 目标，指定webpack运行的环境，例如，web | node | electron-main
	- externals: 排除的依赖，webpack不负责打包这些内容，可以另外用script引入
	- performance: 如何展示性能情况
		- hints:true 提示构建的结果是否超大
		