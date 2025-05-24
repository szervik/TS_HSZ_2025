"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var OrderStatus_1 = require("../Modules/OrderStatus");
var StandardOrder_1 = require("../Modules/StandardOrder");
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order(orderId, orderedProducts, status) {
        if (status === void 0) { status = OrderStatus_1.OrderStatus.new; }
        return _super.call(this, orderId, orderedProducts, status) || this;
    }
    Order.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
    };
    return Order;
}(StandardOrder_1.StandardOrder));
exports.Order = Order;
