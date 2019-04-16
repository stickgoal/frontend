window.addEventListener('load',function(){
//=========对象与引用==============
var obj = new Object();
var objRef = obj;
obj.oneProperty = true;
write(obj.oneProperty===objRef.oneProperty);

//创建一组项目的数组
var items = new Array( "one", "two", "three" );
//创建一个对项目数组的引用
var itemsRef = items;
//给原始数组添加一项
items.push( "four" );
//两个数组的长度应该相同，
//因为它们都指向相同的数组对象
write( "items:"+items );
write( itemsRef);
write( items.length === itemsRef.length );

// 设置 items 为一个字符串的数组(对象)
var items = new Array( "one", "two", "three" );
// 设置 itemsRef 为对items 的引用
var itemsRef = items;
//让 items 指向一个新的对象
items = new Array( "new", "array" );
// items 和 itemsRef 现在指向不同的对象
// items 指向 new Array( "new", "array" )
// itemsRef 则指向new Array( "one", "two", "three" )
write( items !== itemsRef );



});
