// s ='12312'
// console.log(s.split(""))
// console.log(s)
// for(var i of s){
//     console.log(i, typeof(i))
//     setTimeout((j)=>{
//     console.log("a",j)
//     },2000,i)
// }

const a =[1,234,324,32,4,324,32,33]
console.log(a.filter((v,i,self)=>i%2==0))

const d = 10

function rec(n){
    if( n ==2){
        return 2
    }
    else{

        return n * rec(n-1)
    }
}
w = Math.sqrt(rec(10))
console.log(rec(10),"===",w)


funto
