window.addEventListener('load',function(){
    //利用arguments进行方法重载
    function display(){
        switch (arguments.length){
            case 0:
                display0();
                break;
            case 1:
                display1(arguments[0]);
                break;
            default:
                displayMulti(arguments)

        }
        //私有方法
        function display0(){
            write('无参数display方法执行')
        }

        function display1(message) {
            write('单个参数display方法执行：message='+message);
        }
        function displayMulti(args) {
            //最后一个参数为处理函数，其余为处理参数
            var fn = args[args.length-1];
            fn(args);
        }


    }
    display();
    display("呵呵");
    display(1,2,'你干嘛？！',function (args) {
        var str = '';
        //忽略最后一个参数
        for(var i = 0 ;i< args.length-1;i++){
            str+=args[i];
        }
        alert(str);
    });


    //利用类型检查进行方法重载
    //typeOf
    function parse(arg){
        if(typeof(arg)=='string'){
            return parseInt(arg);
        }
        if(typeof(arg) =='number'){
            return arg;
        }
    }
    write(parse(12).constructor.name);
    write(parse("100.22").constructor.name);
    //constructor
    function parse1(arg){
        if(arg.constructor==String){
            return parseInt(arg);
        }
        if(arg.constructor==Number){
            return arg;
        }
    }
    write(parse(12).constructor.name);
    write(parse("100.22").constructor.name);



    //提供缺省值
    function displayError( msg ) {
    //检查确保 msg 不是undefined
            if ( typeof msg == 'undefined' ) {
    //如果是，则设置缺省消息
                msg = "An error occurred.";
            }
    //显示消息
            alert( msg );
    }
    displayError();

});
