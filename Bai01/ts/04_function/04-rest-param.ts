function showStudentInfo(name: string, ...course: string[]): string {
	return name + " study " + course.join(", ");
}

console.log(showStudentInfo("John", "es6", "php", "nodejs"));
console.log(showStudentInfo("John", "es6", "nodejs"));