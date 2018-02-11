function userInfo01(name: string, age: number): string {
	return `My name is ${name}, ${age} years old`;
}

let userInfo02 = function (name: string, age: number): string {
	return `My name is ${name}, ${age} years old`;
}

let userInfo03: (name: string, age: number) => string =
	function(name, age) {
		return `My name is ${name}, ${age} years old`;
	}

console.log(userInfo01("John", 25));
console.log(userInfo02("John", 25));
console.log(userInfo03("John", 25));