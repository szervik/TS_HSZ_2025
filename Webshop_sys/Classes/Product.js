"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(_id, _name, _price, _description) {
        if (_description === void 0) { _description = ""; }
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this._description = _description;
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this._description = _description;
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            if (typeof value === 'string') {
                value = parseFloat(value.replace(/\./g, ''));
            }
            if (isNaN(value) || value < 0) {
                console.warn("Az árnak pozitív számnak kell lennie.");
            }
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;
