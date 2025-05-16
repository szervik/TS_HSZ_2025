export class Book {
    public id: string;
    public title: string;
    public author: string;
    public price: number;

     constructor(id: string, title: string, author: string, price: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
    }
};