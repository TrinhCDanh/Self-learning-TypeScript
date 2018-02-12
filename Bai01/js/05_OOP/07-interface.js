class Machine {
    calulate(x, y) {
        return x + y;
    }
}
class Superman extends Machine {
    constructor(argument) {
        super();
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    fly() {
        console.log("fly");
    }
}
let john = new Superman("john");
john.eat();
john.sleep();
john.fly();
console.log(john.calulate(1, 2));
