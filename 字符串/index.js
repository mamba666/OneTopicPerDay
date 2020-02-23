/**
 * @title 557. 反转字符串中的单词 III
 * @description 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * @example 输入: "Let's take LeetCode contest"
 * @example 输出: "s'teL ekat edoCteeL tsetnoc"
 * @author edison
 */

/**
 * @return {string}
 * @param {*} s 
 */
let reverseWords = function(s) {
    // 将字符串分割为数组，这样就可以实现数组的位置就是单词的位置
    // 保证了总体顺序不变
    let arr=s.split(" ")
    //map中需要一个反转函数
    //要注意，字符串没有反转功能，数组可以
    return result=arr.map(x=>{
        // 按每一个字符去分割
        return x.split("").reverse().join("")
    }).join(" ")
};
let a=reverseWords("hello world")
console.log(a); // "olleh dlrow"

// 1.将字符串变为数组
// 2.通过map对数组每一个元素进行操作,此时x类型是字符串
// 3.将x进行拆分，依然是一个数组
// 4.将拆分后的数组进行反转