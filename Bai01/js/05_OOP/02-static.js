var TasKStatus;
(function (TasKStatus) {
    TasKStatus[TasKStatus["Created"] = 100] = "Created";
    TasKStatus[TasKStatus["Active"] = 101] = "Active";
    TasKStatus[TasKStatus["InActive"] = 102] = "InActive";
    TasKStatus[TasKStatus["Proccess"] = 103] = "Proccess";
    TasKStatus[TasKStatus["Finish"] = 104] = "Finish";
})(TasKStatus || (TasKStatus = {}));
// static gọi trực tiếp không cần khởi tạo
class TaskService {
    constructor(tasks) {
        TaskService.tasks = tasks;
    }
    getItem() {
        return TaskService.tasks;
    }
    static showItemInfo() {
        for (let task of TaskService.tasks)
            console.log(TaskService.username + " - " + task.name);
    }
}
TaskService.username = "John";
let task1 = { id: 1, name: "Coding" };
let task2 = { id: 2, name: "Study ES6" };
let tasks = [
    task1,
    task2,
    { id: 3, name: "Study TypeScript", status: TasKStatus.Finish }
];
let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItem());
console.log(TaskService.username);
TaskService.showItemInfo();
