"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var Order_1 = require("./Order");
var OrderStatus_1 = require("../Modules/OrderStatus");
var User = /** @class */ (function () {
    function User(_userId, _userName, _userEmail, _inventory) {
        this._userId = _userId;
        this._userName = _userName;
        this._userEmail = _userEmail;
        this._inventory = _inventory;
    }
    Object.defineProperty(User.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "userEmail", {
        get: function () {
            return this._userEmail;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.createOrder = function (orderId, products) {
        var _this = this;
        var unavailableProducts = products.filter(function (prod) {
            return !_this._inventory.productAvailability([prod]);
        });
        if (unavailableProducts.length > 0) {
            return "Ezek a term\u00E9kek nem el\u00E9rhet\u0151k: \n                ".concat(unavailableProducts.map(function (prod) { return prod.description; }).join(", "));
        }
        return new Order_1.Order(orderId, products, OrderStatus_1.OrderStatus.new);
    };
    return User;
}());
exports.User = User;
