$(function () {
   //新增
    $("#add").click(function () {
        var item = $('<li class="item"></li>');
        item.append($('<input type="text" name="item"> ').val($('ul li').length));
        item.append($('<span class="close">&times;</span><span class="up">上</span> <span class="down">下</span>'));
        item.insertBefore($("li:last"));
    });
    // 删除
    //事件delegation,因为事件传播原因，.close被点击实际上也是#app被点击，
    //第二个参数.close确认了是否是指定的对象
    $("#app").on("click",".close",function () {
        $(this).parents("li").remove();
    });
    //up
    $("#app").on("click",".up",function () {
        var currItem=$(this).parents("li");
        var prevItem =currItem.prev('.item');
        if(prevItem.length){
            currItem.insertBefore(prevItem);
        }
    });
    //down
    $("#app").on("click",".down",function () {
        var currItem=$(this).parents("li");
        var nextItem =currItem.next('.item');
        if(nextItem.length){
            currItem.insertAfter(nextItem);
        }
    });

});