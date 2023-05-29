var actual = ["hi","hello","good_mrng","welcome,have_a_nice_day"]
var modified = actual.map(e=>{
    if(e === "hi"){
        return `${e},max`
     } else {
        return e
     }
})
console.log(actual)
console.log(modified)