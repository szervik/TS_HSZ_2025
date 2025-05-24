import { Product } from "./Product";
import { OrderStatus } from "../Modules/OrderStatus";
import { StandardOrder } from "../Modules/StandardOrder";

export class Order extends StandardOrder {
    constructor(
        orderId: string,
        orderedProducts: Product[],
        status: OrderStatus = OrderStatus.new
    ) {
        super(orderId, orderedProducts, status);
    }

    updateStatus(newStatus: OrderStatus): void {
        this.status = newStatus;
    }
}