// abstract không quan tâm tham số chỉ quan tâm kiểu trả về
class Laptop {
    keyboard() {
        console.log("Laptop.keyboard");
    }
    chipset() {
        console.log("Laptop.chipset");
    }
}
class laptopDell extends Laptop {
    keyboard() {
        console.log("LaptopDell.keyboard");
    }
    mainboard() {
        console.log("LaptopDell.mainboard");
        return "123";
    }
}
let laptopObj = new laptopDell;
laptopObj.keyboard();
laptopObj.mainboard();
laptopObj.chipset();
