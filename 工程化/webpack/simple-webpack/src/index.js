//引入一个模块作为测试
import _ from 'lodash';
//提供一个方法，使用到了lodash的方法
function component() {

	var div = document.createElement("div");
	div.innerHTML = _.join(['Hello','webpack'],' ');
	console.log(div);
	return div;
}
//加入到页面中
document.body.appendChild(component());
