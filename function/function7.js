// callback function
function add(a,b,cb){
    const result = a+b
    cb(result)
}
add(25,35,(e)=>{
console.log(e)
}
)