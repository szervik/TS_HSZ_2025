"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books) {
        this.books = [];
        this.books = books;
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBook = function (id) {
        var removableBook = this.books.findIndex(function (book) { return book.id === id; });
        if (removableBook !== -1) {
            this.books.splice(removableBook, 1);
        }
    };
    Library.prototype.findBookById = function (id) {
        var wantedBook = this.books.find(function (book) { return book.id === id; });
        if (wantedBook)
            return wantedBook;
        return null;
    };
    Library.prototype.listAllBooks = function () {
        return this.books.map(function (book) { return book; });
    };
    return Library;
}());
exports.Library = Library;
;
