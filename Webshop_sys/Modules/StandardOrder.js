"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardOrder = void 0;
var OrderStatus_1 = require("./OrderStatus");
var StandardOrder = /** @class */ (function () {
    function StandardOrder(orderId, orderedProducts, status) {
        if (status === void 0) { status = OrderStatus_1.OrderStatus.new; }
        this.orderId = orderId;
        this.orderedProducts = orderedProducts;
        this.status = status;
    }
    StandardOrder.prototype.orderTotalPrice = function () {
        return this.orderedProducts.reduce(function (sum, product) {
            return sum + product.price;
        }, 0);
    };
    return StandardOrder;
}());
exports.StandardOrder = StandardOrder;
