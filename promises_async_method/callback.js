// console.log(1)
// console.log(2)
// console.log(3)
// setTimeout(()=>
// console.log(4),5000)
// console.log(5)
//concurrency
function func1(a,b,callback){
    callback(a+b)
}
function func2(a,b,c,callback){
    callback(undefined)
}
function func3(a,b,callback){
    callback(a/b)
}
func1(12,21,(result)=>{
    console.log(result)
    func2(13,12,result,(result2)=>{
        console.log(result2)
        func3(51480,result2,result3=>{
            console.log(result3)
        })
    
    })
})
// callback hell