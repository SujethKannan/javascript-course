const bookProtos={
    getsummary:function(){
        return `${this.title} was written by ${this.author} in the year of ${this.year}`
    },
    getYearsOld:function(){
        const result = new Date().getFullYear() - this.year
        return `${this.title} is ${result} years old`
    }
    }
    // const book=Object.create(bookProtos)
    // book.title='fundamental_concepts_of_javascript'
    // book.author='Steve Rogers'
    // book.year=2000
    const book=Object.create(bookProtos,{
    title:{value:'fundamental_concepts_of_javascript'},
    author:{value:'Steve Rogers'},
    year:{value:2000}
    })
    console.log(book)
    
