// Tạo 1 class
class Task {
	id: number;
	name: string;
	status: string;

	constructor(id: number, name: string, status: string) {
		this.id = id;
		this.name = name;
		this. status = status;
	}

	showTaskInfo() {
		console.log(`${this.id} - ${this.name} - ${this.status}`);
	}
}


let taskObj1 = new Task(001, "play game", "created");
taskObj1.showTaskInfo()
console.log(taskObj1);