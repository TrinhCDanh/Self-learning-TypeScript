// Tạo 1 class
class Task {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    showTaskInfo() {
        console.log(`${this.id} - ${this.name} - ${this.status}`);
    }
}
let taskObj1 = new Task(1, "play game", "created");
taskObj1.showTaskInfo();
console.log(taskObj1);
