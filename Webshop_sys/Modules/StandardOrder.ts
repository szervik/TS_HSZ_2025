import { Product } from "../Classes/Product";
import { OrderStatus } from "./OrderStatus";

export abstract class StandardOrder {
    constructor(
        protected orderId: string,
        protected orderedProducts: Product[],
        protected status: OrderStatus = OrderStatus.new
    ) {}

    abstract updateStatus(newStatus: OrderStatus): void;

    orderTotalPrice(): number {
        return this.orderedProducts.reduce((sum, product) => 
            sum + product.price, 0);
    }
}