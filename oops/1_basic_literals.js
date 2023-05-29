const book={
    title : 'book one',
    author : 'john',
    year : '2000',
    getSummary : function(message){
        return `${message},${this.title} was written by ${this.author} and published in the year of ${this.year}`

    }}
    console.log(book.getSummary('hi'))