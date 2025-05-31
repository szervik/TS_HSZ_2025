import { Book } from "./Book";
import { ILibrary } from "./ILibrary";

export class Library implements ILibrary {
    public books: Book[] = [];

    constructor(books: Book[]) {
        this.books = books;
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(id: string): void {
        const removableBook = this.books.findIndex(book => book.id === id);
        if (removableBook !== -1) {
            this.books.splice(removableBook, 1);
        }
    }

    findBookById(id: string): Book | null {
        const wantedBook = this.books.find(book => book.id === id);
        if (wantedBook)
            return wantedBook;
        return null;
    }

    listAllBooks(): Book[] {
        return this.books.map(book => book);
    }
};