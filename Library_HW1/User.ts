import { Book } from "./Book";
import { Library } from "./Library";

export class User {
    public userId: string;
    public name: string;
    public email: string;
    public borrowedBooks: Book[];

    constructor(userId: string, name: string, email: string, borrowedBooks: Book[] = []) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.borrowedBooks = borrowedBooks;
    }

    borrowBook(library: Library, bookId: string): void {
        const bookBorrowing = library.findBookById(bookId);

        if (bookBorrowing) {
            this.borrowedBooks.push(bookBorrowing);
            library.removeBook(bookId);
        }
    }
};