function books(title,year,author){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary=function(){
        return `${this.title} was written by ${this.author} in the year of ${this.year}`
    }
}
const books1=new books('bookone','jhonny','2002');
const book2=new books('booktwo','nick','2010');
console.log(book2)