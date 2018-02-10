// Function không trả về gì cả
function noReturn(): void {
	console.log("noReturn");
}

// Function trả về number
function returnNumber(): number {
	return 3;
}

function returnArray(): string[] {
	return ["1", "2"];
}

function returnAny(): any {
	return ["1", "2"];
}

noReturn();
console.log(returnNumber());
console.log(returnArray());
console.log(returnAny());

interface varArray {
	[index: number]: string;
}

function returnArrayInter(): varArray {
	return ["1", "2"];
}
console.log(returnArrayInter());