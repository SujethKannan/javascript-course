// const num=1000
// console.log(num.toString(16))

var array_num = [25,36,12,78,96,45]
var conv_num = array_num.map(e=>{
   return e.toString(8)
})
console.log(conv_num)