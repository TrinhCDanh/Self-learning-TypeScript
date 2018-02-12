class Product<A, B, C> {
	id: A;
	name: B;
	price: C;

	constructor(id: A, name: B, price: C) {
		this.id = id;
		this.name = name;
		this.price = price;
	}

	showProductInfo() {
		console.log(`${this.id} - ${this.name} - ${this.price}`);
	}

}

let product1 = new Product<string, string, number>("ID1", "Product01", 20);
let product2 = new Product<number, string, boolean>(12, "Product01", true);

product1.showProductInfo();
product2.showProductInfo();