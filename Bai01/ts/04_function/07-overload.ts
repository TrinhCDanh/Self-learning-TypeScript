function funcAbc(x: string): number;
function funcAbc(x: number): string;
function funcAbc(x: boolean): string;
function funcAbc(x: any): any {
	if(typeof x == "string")
		return 10;
	else if(typeof x == "number")
		return "Hello";
	else
		return true;
} 

console.log(funcAbc(false));

