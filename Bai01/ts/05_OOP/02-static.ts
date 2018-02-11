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

// static gọi trực tiếp không cần khởi tạo
class TaskService {
	public static username: string = "John";
	static tasks: TaskInterface[];

	constructor(tasks: TaskInterface[]) {
		TaskService.tasks = tasks;
	}

	getItem() {
		return TaskService.tasks;
	}

	static showItemInfo() {
		for(let task of TaskService.tasks) 
			console.log(TaskService.username + " - " + task.name);
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

console.log(TaskService.username);

TaskService.showItemInfo();