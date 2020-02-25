/**
 * @title 914. 卡牌分组
 * @author edison
 */





// 核心算法   分组  
// arr为给定的一组牌   tmp是为了临时存储这个分组

let min = Number.MAX_SAFE_INTEGER //设置一个最大的数，用来保存一个最小分组
let dst = [] //用来记录每个分组
for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
    tmp.push(arr[i]) //第一个元素不用考虑
    for (let j = i + 1; j < len; j++) {
        if (arr[j] === arr[i]) { //判断相邻两个牌是否相等
            tmp.push(arr[j]) //如果相等就放入这个零时分组tmp
        } else {
            if (min > tmp.length) { // 如果不想等 就说明这个tmp也就到此结束了
                min = tmp.length // 现在就可以先设置当前的最小分组
            }
            dst.push([].concat(tmp)) // [[tmp]]
            tmp.length = 0 // 清空零时分组
            i = j //因为第一组做完了， 所以都要重置
            break
        }
    }
}



// 排序
// let deck=[1,2,3,4,6,9,7]
// deck.sort((a,b)=>{
//     return a-b
// })
// console.log(deck)