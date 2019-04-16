
//显示用
var write = function(str){
    var c = document.getElementById('container');
    var div = document.createElement('div');
    div.textContent = str;
    c.appendChild(div);
}
