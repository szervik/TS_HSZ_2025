import { Order } from "./Order";
import { Product } from "./Product";
import { Inventory } from "./Inventory";
import { OrderStatus } from "../Modules/OrderStatus";

export class User {
    constructor(
        private _userId: string,
        private _userName: string,
        private _userEmail: string,
        private _inventory: Inventory
    ) { }

    get userId(): string {
        return this._userId;
    }

    get userName(): string {
        return this._userName;
    }

    get userEmail(): string {
        return this._userEmail;
    }

    createOrder(orderId: string, products: Product[]): Order | string {
        const unavailableProducts = products.filter(prod =>
            !this._inventory.productAvailability([prod])
        );

        if (unavailableProducts.length > 0) {
            return `Ezek a termékek nem elérhetők: 
                ${unavailableProducts.map(prod => prod.description).join(", ")}`;
        }
        return new Order(orderId, products, OrderStatus.new);
    }

}