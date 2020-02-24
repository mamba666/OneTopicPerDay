/**
 * @description splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
 * @function arrayObject.splice(index,howmany,item1,.....,itemX)
 * @author edison
 */

let letter=["a","b","c","d"]
let removedItem = letter.splice(1, 2); 
console.log(removedItem);//[ 'b', 'c' ]
let x = removedItem.splice(2, 0, "x", "y"); 
console.log(x,removedItem);//[] [ 'b', 'b', 'c', 'c' ]
