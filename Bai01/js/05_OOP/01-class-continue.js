var TasKStatus;
(function (TasKStatus) {
    TasKStatus[TasKStatus["Created"] = 100] = "Created";
    TasKStatus[TasKStatus["Active"] = 101] = "Active";
    TasKStatus[TasKStatus["InActive"] = 102] = "InActive";
    TasKStatus[TasKStatus["Proccess"] = 103] = "Proccess";
    TasKStatus[TasKStatus["Finish"] = 104] = "Finish";
})(TasKStatus || (TasKStatus = {}));
class TaskService {
    constructor(tasks) {
        this.tasks = tasks;
    }
    getItem() {
        return this.tasks;
    }
}
let task1 = { id: 1, name: "Coding" };
let task2 = { id: 2, name: "Study ES6" };
let tasks = [
    task1,
    task2,
    { id: 3, name: "Study TypeScript", status: TasKStatus.Finish }
];
let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItem());
