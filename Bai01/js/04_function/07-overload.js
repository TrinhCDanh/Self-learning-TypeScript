function funcAbc(x) {
    if (typeof x == "string")
        return 10;
    else if (typeof x == "number")
        return "Hello";
    else
        return true;
}
console.log(funcAbc(false));
