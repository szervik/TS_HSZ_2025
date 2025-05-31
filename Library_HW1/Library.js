"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor(books) {
        this.books = [];
        this.books = books;
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(id) {
        const removableBook = this.books.findIndex(book => book.id === id);
        if (removableBook !== -1) {
            this.books.splice(removableBook, 1);
        }
    }
    findBookById(id) {
        const wantedBook = this.books.find(book => book.id === id);
        if (wantedBook)
            return wantedBook;
        return null;
    }
    listAllBooks() {
        return this.books.map(book => book);
    }
}
exports.Library = Library;
;
