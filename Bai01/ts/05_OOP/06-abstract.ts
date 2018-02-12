// abstract không quan tâm tham số chỉ quan tâm kiểu trả về

abstract class Laptop {

	public keyboard(): void {
		console.log("Laptop.keyboard");
	}

	public abstract mainboard(): string;

	public chipset(): void {
		console.log("Laptop.chipset");
	}
}


class laptopDell extends Laptop {
	public keyboard(): void {
		console.log("LaptopDell.keyboard");
	}

	public mainboard(): string {
		console.log("LaptopDell.mainboard");
		return "123";	
	}
}

let laptopObj = new laptopDell;
laptopObj.keyboard();
laptopObj.mainboard();
laptopObj.chipset();