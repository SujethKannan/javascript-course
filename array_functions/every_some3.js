const phone = '+919874561230@.'
function testnumber(mobile){
    const testExpression = /^[+0-9@.]+$/
    const result = testExpression.test(mobile)
    return result
}
console.log(testnumber(phone))