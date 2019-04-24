const path = require('path');
//webpack配置，确定入口文件（entry）是index.js，并由该文件找到依赖的文件
//一层层分析出依赖图，并进行打包
//output表示输出，最终输出到当前路径的dist目录下的bundle.js文件中
module.exports = {
	entry: './src/index.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'bundle.js'
	}
}