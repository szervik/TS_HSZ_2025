"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_js_1 = require("./Classes/Product.js");
var Inventory_js_1 = require("./Classes/Inventory.js");
var User_js_1 = require("./Classes/User.js");
var OrderStatus_js_1 = require("./Modules/OrderStatus.js");
var product1 = new Product_js_1.Product("P001", "Lenovo IdeaPad 1", 250000, "laptop");
var product2 = new Product_js_1.Product("P002", "Genius DX-120 USB egér", 1500, "egér");
var product3 = new Product_js_1.Product("P003", "LG UltraGear 27GS75Q-B Monitor", 25000, "monitor");
var product4 = new Product_js_1.Product("P004", "Creality 3D Ender 3 V3 SE Nyomtató", 82000, "3D nyomtató");
console.log("Termékek:");
console.log(product1, product2, product3);
var inventory = new Inventory_js_1.Inventory([]);
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);
inventory.addProduct(product4);
console.log("Teljes k\u00E9szlet: ".concat(inventory.listAllProducts()));
inventory.listAllProducts().forEach(function (prod) { return console.log(prod); });
var user = new User_js_1.User("u001", "Kiss Gábor", "gabor@example.com", inventory);
console.log("L\u00E9trehozott felhaszn\u00E1l\u00F3: ".concat(user));
console.log(user);
var rendelés = user.createOrder("o1001", [product1, product3]);
console.log("Rendel\u00E9s eredm\u00E9nye: ".concat(rendelés));
console.log(rendelés);
if (typeof rendelés !== "string") {
    console.log("Rendelés összértéke:", rendelés.orderTotalPrice(), "Ft");
    rendelés.updateStatus(OrderStatus_js_1.OrderStatus.underProcess);
    console.log("Frissített rendelés állapot:", OrderStatus_js_1.OrderStatus.underProcess);
    rendelés.updateStatus(OrderStatus_js_1.OrderStatus.delivered);
    console.log("A rendelési állapot frissítve: ", OrderStatus_js_1.OrderStatus.delivered);
}
else {
    console.warn("Nem sikerült a rendelés: ", rendelés);
}
