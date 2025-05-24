"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
var Inventory = /** @class */ (function () {
    function Inventory(_productList) {
        this._productList = _productList;
        this._productList = _productList;
    }
    Inventory.prototype.addProduct = function (product) {
        this._productList.push(product);
    };
    Inventory.prototype.removeProduct = function (id) {
        var delProduct = this._productList.findIndex(function (prod) { return prod.id === id; });
        if (delProduct !== -1) {
            this._productList.splice(delProduct, 1);
        }
    };
    Inventory.prototype.findProduct = function (idOrName) {
        return this._productList.find(function (prod) {
            return prod.id === idOrName ||
                prod.name === idOrName;
        });
    };
    Inventory.prototype.listAllProducts = function () {
        return this._productList.map(function (prod) { return prod; });
    };
    Inventory.prototype.productAvailability = function (products) {
        var _this = this;
        return products.every(function (prod) {
            return _this._productList.some(function (invProd) {
                return invProd.id === prod.id;
            });
        });
    };
    return Inventory;
}());
exports.Inventory = Inventory;
