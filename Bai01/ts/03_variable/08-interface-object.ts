let objOne: any = {}
console.log(objOne);

interface CourseInterface {
	name: string;
	time: number;
	free?: boolean; // có hay không có cũng được
}

let objTwo: CourseInterface = {
	name: "ES6",
	time: 5
};

let objThree: CourseInterface = {
	name: "TypeScript",
	time: 15,
	free: true
};

console.log(objTwo);
console.log(objThree);