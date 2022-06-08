// !wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
// function ank(num){
//     return num % 1 === 0;
// }
// console.log(ank(4));


// !wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
// function ank(n){
//     let ans = 1;
//     if(n == 0 || n == 1){
//         return ans;
//     }else{
//         for(var i = n ; i>=1 ; i--){
//             ans = ans * i
//         }
//         return ans;
//     }
// }
// let n = 4;
// ans = ank(n)
// console.log("factorial of " + n + " is " + ans);


// !wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
// const a = [1,5,2,3,6,4,8,9,5]
// const ank = (a) => {
//     let fi = a[0]
//     let gi = a[0]
//     for(var i=0 ; i<a.length ; i++){
//         if(a[i] > fi){
//             gi = fi
//         }else if(a[i] > gi){
//             gi = a[i]
//         }
//     }
//     return gi
// }
// console.log(ank(a));


// !wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
// var a = [1,2,3,5,4,5,6,2,1,2,5,88,9,7,8,8,8,124,15,2,556,54,25,55,1,2,4,22,22,44]
// let ank = a.filter((c,id) => {
//     return a.indexOf(c) === id
// })
// console.log(ank);


// !wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
// let a = "radharani"
// let anw = ""
// for(var i=a.length-1 ; i>=0 ; i--){
//     anw += a[i]
// }
// console.log(anw);

// function ank(str){
//     var newStr = " ";
//     for(var i = str.length - 1 ; i>=0 ; i--){
//         newStr += str[i]
//     }
//     return newStr;
// }
// console.log(ank("ankit"));

