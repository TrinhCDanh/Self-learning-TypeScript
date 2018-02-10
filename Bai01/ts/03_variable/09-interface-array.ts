// let course: string[] = ["ES6", "TypeScript"];
// console.log(course);

// interface-array qui định chỉ số trong mảng có kiểu là gì và giá trị trong mảng có kiểu là gì
interface CourseList {
	[index: number]: string;
}

let course: CourseList = ["ES6", "TypeScript"];
console.log(course);