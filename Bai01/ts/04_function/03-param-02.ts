// Một tham số có nhiều kiểu
function totalLength(x: (string | any[] | any), y: (string[] | string)) : number {
		return x.length + y.length;
}

console.log(totalLength("123", "t321"));
console.log(totalLength(["123"], "t321"));
console.log(totalLength("sadas", "t321"));