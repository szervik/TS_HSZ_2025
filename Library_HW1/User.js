"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userId, name, email, borrowedBooks = []) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.borrowedBooks = borrowedBooks;
    }
    borrowBook(library, bookId) {
        const bookBorrowing = library.findBookById(bookId);
        if (bookBorrowing) {
            this.borrowedBooks.push(bookBorrowing);
            library.removeBook(bookId);
        }
    }
}
exports.User = User;
;
