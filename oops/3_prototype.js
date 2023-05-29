function books(title,year,author){
    this.title = title;
    this.author = author;
    this.year = year;
}
books.prototype.getSummary=function(){
    return `${this.title} was written by ${this.author} in the year of ${this.year}`
}
books.prototype.getYearsOld=function(){
    const result = new Date().getFullYear() - this.year
    return `${this.title} is ${result} years old`
}
books.prototype.revise=function(newYear){
    this.year=newYear
}
const books1=new books('bookone','2002','jhonny');
const book2=new books('booktwo','2010','nick');
// console.log(book2.getYearsOld())
console.log(books1.year)
books1.revise(2022)
console.log(books1.year)