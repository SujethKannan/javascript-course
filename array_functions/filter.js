var elements = [123,'abcd','***','efgh','***',567]
var filtered = elements.filter(e=>{
    //if(e === '***'){
        return (e !== '***')
//    }
})
console.log(filtered)