import { Product } from "./Product";

export class Inventory {
    constructor(private _productList: Product[]) {
        this._productList = _productList;
    }

    addProduct(product: Product): void {
        this._productList.push(product);
    }

    removeProduct(id: string): void {
        const delProduct = this._productList.findIndex(prod => prod.id === id);
        if (delProduct !== -1) {
            this._productList.splice(delProduct, 1);
        }
    }

    findProduct(idOrName: string): Product | undefined {
        return this._productList.find(prod =>
            prod.id === idOrName ||
            prod.name === idOrName);
    }

    listAllProducts(): Product[] {
        return this._productList.map(prod => prod);
    }

    productAvailability(products: Product[]): boolean {
        return products.every(prod =>
            this._productList.some(invProd => 
                invProd.id === prod.id));
    }
}