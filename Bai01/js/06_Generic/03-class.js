class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProductInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
let product1 = new Product("ID1", "Product01", 20);
let product2 = new Product(12, "Product01", true);
product1.showProductInfo();
product2.showProductInfo();
