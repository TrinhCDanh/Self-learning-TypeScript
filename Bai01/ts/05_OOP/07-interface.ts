interface People {
	name: string;
	eat(): void;
	sleep(): void;
}

interface Bird {
	fly(): void;
}

class Machine {
	calulate(x: number, y: number): number {
		return x + y;
	}
}

class Superman extends Machine implements People, Bird {
	
	name: string;
	constructor(argument) {
		super();
		this.name = name;
	}

	eat(): void {
		console.log("eat");
	}

	sleep(): void {
		console.log("sleep");
	}

	fly(): void {
		console.log("fly");
	}
}

let john: Superman = new Superman("john");
john.eat();
john.sleep();
john.fly();
console.log(john.calulate(1,2));