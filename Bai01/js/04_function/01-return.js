// Function không trả về gì cả
function noReturn() {
    console.log("noReturn");
}
// Function trả về number
function returnNumber() {
    return 3;
}
function returnArray() {
    return ["1", "2"];
}
function returnAny() {
    return ["1", "2"];
}
noReturn();
console.log(returnNumber());
console.log(returnArray());
console.log(returnAny());
function returnArrayInter() {
    return ["1", "2"];
}
console.log(returnArrayInter());
