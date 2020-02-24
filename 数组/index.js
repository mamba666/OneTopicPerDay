/**
 * @description 9键诺基亚任意输入几个数字，找出数字与数字之间所对应的关系
 * @example "23"=>["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] 
 * @rule 输入字符串，输出数组
 * @tips 7和9对应的是4个字母，其他都是3个字母
 * @author edison
 */

var letterCombinations = function(digits) {
    // 建立map和num两个数组，用来一一对应
    let map=["",1,"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    let num=digits.split("")
    let code=[]
    num.forEach(item=>{
        if(map[item]){
            code.push(map[item])
        }
    })
    let comb=arr=>{
        let tmp=[]
        for(let i=0,il=arr[0].length;i<il;i++){
            for(let j=0,jl=arr[1].length;j<jl;j++){
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0,2,tmp)
        if(arr.length>1){
            comb(arr)
        }else{
            console.log(tmp)
            return tmp
        }
        return arr[0]
    }
    return comb(code)
};
letterCombinations("789")



// 自己瞎写，发现只能通过两个数，在多就不行了
    // let letter=["",1,"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    // let num="23"
    // let x=num.split("")
    // console.log(x)  // 2,3
    // for(let i=0;i<x.length;i++){  //i:0 1
    //     x[i]=letter[x[i]]
    // }
    // console.log(x) //x是对应的letter  ["abc","def"]
    // // let a=x[0].split("").join("")
    // // console.log(a[1])  //b
    // let result=[]
    // for(let i=0;i<x[0].split("").length;i++){
    //     for(let j=0;j<x[1].split("").length;j++){
    //         result.push(`${x[0].split("").join("")[i]}${x[1].split("").join("")[j]}`)
    //     }
    // }
    // console.log(result)
    // x.splice(0,2,result)
    // if(x.length>1){
        
    // }else{
    //     return result
    // }


// 思路：
// let letterCombinations = function(digits) {
//     let arr=digits.split("")
//     let i,j,result
//     for(i=0;i<arr[0].length;i++){
//         for(j=0;j<arr[1].lenght;j++){
//             result.push(arr[0][i],arr[1][j])
//         }
//     }
//     arr.splice(0,2,result)
//     if(arr.length>1){
            // 递归
//     }else{
//         return result
//     }
// };