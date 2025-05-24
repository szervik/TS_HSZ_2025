import { Product } from "./Classes/Product.js";
import { Inventory } from "./Classes/Inventory.js";
import { User } from "./Classes/User.js";
import { OrderStatus } from "./Modules/OrderStatus.js";


const product1 = new Product("P001", "Lenovo IdeaPad 1", 250000, "laptop");
const product2 = new Product("P002","Genius DX-120 USB egér", 1500, "egér");
const product3 = new Product("P003", "LG UltraGear 27GS75Q-B Monitor", 25000, "monitor");
const product4 = new Product("P004", "Creality 3D Ender 3 V3 SE Nyomtató", 82000, "3D nyomtató");

console.log("Termékek:");
console.log(product1, product2, product3);

const inventory = new Inventory([]);
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);
inventory.addProduct(product4);

console.log(`Teljes készlet: ${inventory.listAllProducts()}`);
inventory.listAllProducts().forEach(prod => console.log(prod));

const user = new User("u001", "Kiss Gábor", "gabor@example.com", inventory);
console.log(`Létrehozott felhasználó: ${user}`);
console.log(user);

const rendelés = user.createOrder("o1001", [product1, product3]);

console.log(`Rendelés eredménye: ${rendelés}`);
console.log(rendelés);

if (typeof rendelés !== "string") {
    console.log("Rendelés összértéke:", rendelés.orderTotalPrice(), "Ft");

    rendelés.updateStatus(OrderStatus.underProcess);
    console.log("Frissített rendelés állapot:", OrderStatus.underProcess);

    rendelés.updateStatus(OrderStatus.delivered);
    console.log("A rendelési állapot frissítve: ", OrderStatus.delivered);
} else {
    console.warn("Nem sikerült a rendelés: ", rendelés);
}
