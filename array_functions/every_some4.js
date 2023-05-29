const elemset = ['abc','***','@@@','efg','+++',123]
function testvalue(element){
    const testExpression = /^[,+0-9@.a-z*]+$/
    const result = testExpression.test(element)
    return result
}
var result = elemset.some(testvalue) 
console.log(result)