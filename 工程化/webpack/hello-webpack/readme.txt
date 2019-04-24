运行 webpack命令，找到webpack.config.js文件并运行之

webpack根据配置文件，找到index.js和它的依赖文件bar.js并打包，输出到dist/bundle.js下
执行index.html时，因为引入了bundle.js，执行该文件就是执行index.js中的内容