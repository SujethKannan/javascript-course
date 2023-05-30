// baseclas Constructor
function books(title,year,author){
    this.title = title;
    this.year = year;
    this.author = author;
}
// baseclass prototype
books.prototype.getSummary=function(){
    return `${this.title} was written by ${this.author} in the year of ${this.year}`;
}
// childclass constructor
function magazine(title,year,author,month){
     // Inheriting baseclass object into child class constructor
 books.call(this,title,year,author);
     this.month=month;
}
// Inheriting base class Prototype to child class
magazine.prototype = Object.create(books.prototype);
// Defining Protypes for child class only after above prototype inheritance
magazine.prototype.getTitle=function(){
    return this.title;
}
// Instantiate childclass Object
const mag1=new magazine('firstmag','2021','john','oct');
const mag2=new magazine('scndmag','2023','jack','apr');
// console.log(mag1.getSummary());
// console.log(mag2);
console.log(mag1);