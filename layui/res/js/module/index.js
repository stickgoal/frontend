/**
  项目JS主入口
  以依赖layui的layer和form模块为例
**/    
layui.define(['jquery','layer','form'],function (exports) {
    var $ = layui.$,form = layui.form;

    form.on('submit(loginFormFilter)', function(data){
        layer.msg(JSON.stringify(data.field));
        return false;
    });

	exports('index',{})
})