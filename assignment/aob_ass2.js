const data = [
    {
        name: "Laura",
        details: [
            {
                general: {
                    age: 20,
                    gender: "Female",
                },
                additional: {
                    designation: "Junior Developer"
                }
            }
        ],
    },
    {
        name: "Max",
        details: [
            {
                general: {
                    age: 25,
                    gender: "Male",
                },
                additional: {
                    designation: "Senior Developer"
                }
            }
        ]
    },
    {
        name: "Joanna",
        details: [
            {
                general: {
                    age: 30,
                    gender: "Female",
                },
                additional: {
                    designation: "Manager"
                }
            }
        ]
    }
];
for (let i = 0; i < data.length; i++) {
    console.log(`${data[i].name},${data[i].details[0].general.age},${data[i].details[0].general.gender},${data[i].details[0].additional.designation}`)
}
// data.forEach(e => {
//     console.log(`${e.name},${e.details[0].general.age},${e.details[0].general.gender},${e.details[0].additional.designation}`)
// })


