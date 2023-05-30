class book{
    constructor(title,year,author){
    this.title = title;
    this.author = author;
    this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in the year of ${this.year}`
    }
    getYearsOld(){
        const result = new Date().getFullYear() - this.year
        return `${this.title} is ${result} years old`
    }
    revise(newYear){
        this.year=newYear
        // this.revised=true
    }
    static additionaljsbooks(){
        return 'additional javascript books=js'
    }
}
    const book1= new book('jsbooks',2010,'nick')
    // console.log(book.additionaljsbooks())
    console.log(book1);
    book1.revise(2021)
    console.log(book1)
   // console.log(book1.hasOwnProperty('title'))
