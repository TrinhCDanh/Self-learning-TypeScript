enum TasKStatus {
	Created = 100,
	Active,
	InActive,
	Proccess,
	Finish
}

interface TaskInterface {
	id: number;
	name: string;
	status?: TasKStatus;
}

class TaskService {
	tasks: TaskInterface[];

	constructor(tasks: TaskInterface[]) {
		this.tasks = tasks;
	}

	getItem() {
		return this.tasks;
	}
} 

let task1: TaskInterface = {id: 1, name: "Coding"};
let task2: TaskInterface = {id: 2, name: "Study ES6"};


let tasks: TaskInterface[] = [
	task1,
	task2,
	{id: 3, name: "Study TypeScript", status: TasKStatus.Finish}
];

let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItem());