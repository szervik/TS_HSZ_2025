"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userId, name, email, borrowedBooks) {
        if (borrowedBooks === void 0) { borrowedBooks = []; }
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.borrowedBooks = borrowedBooks;
    }
    User.prototype.borrowBook = function (library, bookId) {
        var bookBorrowing = library.findBookById(bookId);
        if (bookBorrowing) {
            this.borrowedBooks.push(bookBorrowing);
            library.removeBook(bookId);
        }
    };
    return User;
}());
exports.User = User;
;
