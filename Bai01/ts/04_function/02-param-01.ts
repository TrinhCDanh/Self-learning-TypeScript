function userInfo1(name:string, age:number): string {
	return `My name is ${name} and ${age} years old`;
}

function userInfo2(name:string = "Doe", age:number = 25): string {
	return `My name is ${name} and ${age} years old`;
}

//Tham số khuyết
function userInfo3(name:string = "Doe", age?:number): string {
	if(age == null)
		return `My name is ${name}`;
	else
		return `My name is ${name} and ${age} years old`;
}

console.log(userInfo3());