// 100 created, 101 proccess, 102 finish
var STATUS;
(function (STATUS) {
    STATUS[STATUS["created"] = 100] = "created";
    STATUS[STATUS["proccess"] = 101] = "proccess";
    STATUS[STATUS["finish"] = 102] = "finish";
})(STATUS || (STATUS = {}));
;
let statusTodo = STATUS.proccess;
console.log(statusTodo);
