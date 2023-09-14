class Book {
    #isbn
    constructor (isbn, title, author, yearPublished) {
        this.#isbn = isbn;
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }

    get bookIsbn() {
        return this.#isbn
    }
}

let lotr = new Book("2557234762938476", "Fellowship of the Ring", "Tolkein", 1954);
let twoTowers = new Book("29750987456983247", "The Two Towers", "Tolkein", 1956);
let rotk = new Book("957384756087", "Return of the King", "Tolkein", 1959);

class Library {
    constructor() {
        this.books = []
    }
    addBook(book) {
        this.books.push(book)
    }

    removeBook(bookToRemove) {
        let indexOfBookToRemove = this.books.findIndex(book => {
            return book.bookIsbn == bookToRemove.bookIsbn
        })

        if(indexOfBookToRemove > -1) {
            this.books.splice(indexOfBookToRemove);
        }
        else {
            console.log("The book was not found.")
        }
    }

    allBooks() {
        console.log(this.books);
    }
}