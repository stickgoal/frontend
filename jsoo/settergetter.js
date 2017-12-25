window.addEventListener('load', function () {
    //创建一个新的接受 properties 对象的对象
    function User(properties) {
        var self = this;
        //遍历对象属性，确保它作用域正确(如前所述)
        for (var i in properties) {
            //闭包是为了解决properties[i]的i在调用时会停留在最后一个属性的问题
            //通过闭包
            (function () {
                var p = i;
                //为属性创建获取器
                self["get" + p] = function () {
                    return properties[p];
                };
                //为属性创建设置器
                self["set" + p] = function (val) {
                    properties[p] = val;
                };
            })();

        }
    }

    var u = new User({name:'Lucas',age:23});
    write("直接访问name："+u.name);
    write("直接访问age："+u.age);
    write("使用getter访问name："+u.getname());
    write("使用getter访问age："+u.getage());


});