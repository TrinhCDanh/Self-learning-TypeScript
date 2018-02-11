function showStudentInfo(name, ...course) {
    return name + " study " + course.join(", ");
}
console.log(showStudentInfo("John", "es6", "php", "nodejs"));
console.log(showStudentInfo("John", "es6", "nodejs"));
