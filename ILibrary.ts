import { Book } from "./Book";

export interface ILibrary {
    addBook(book: Book): void;
    removeBook(bookId: string): void;
    findBookById(bookId: string): Book | null;
    listAllBooks(): Book[];
};
