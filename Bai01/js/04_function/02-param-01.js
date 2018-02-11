function userInfo1(name, age) {
    return `My name is ${name} and ${age} years old`;
}
function userInfo2(name = "Doe", age = 25) {
    return `My name is ${name} and ${age} years old`;
}
//Tham số khuyết
function userInfo3(name = "Doe", age) {
    if (age == null)
        return `My name is ${name}`;
    else
        return `My name is ${name} and ${age} years old`;
}
console.log(userInfo3());
