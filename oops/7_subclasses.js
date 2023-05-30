class book{
    constructor(title,year,author){
    this.title = title
    this.author = author
    this.year = year
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in the year of ${this.year}`
    }
}
    class magazine extends book{
        constructor(title,year,author,month){
        super(title,year,author)
        this.month=month
        }
    }
    const mag=new magazine('magone',2010,'tony stark','jan')
    console.log(mag)
    //ECMA 2016 ES6 Module