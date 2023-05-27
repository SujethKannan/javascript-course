const data=[{
    name : "sujeth",
    details :{
       age : 24,
       gender : "male"
    }

},
{ 
    name : "natasha",
    details :{
        age : 35,
        gender : "female"
    }
},
{
    name : "nick",
     details :{
        age : 28,
        gender : "male"
    }
},
{
        name : "priya",
     details :{
        age : 26,
        gender : "female"
    }
}]
// console.log(data[2].details.gender)
// for(let i=0;i<data.length;i++){
//     console.log(data[i].details.age)
// }
data.forEach(e=>{
    console.log(e.details.age)
})
