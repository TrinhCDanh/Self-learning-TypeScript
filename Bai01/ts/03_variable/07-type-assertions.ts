/*// type-assertions chuyển đỏi kiểu dữ liệu
let mVariable:any = "TypeScript";

//let total = mVariable.length;

// C1
//let total = (<string>mVariable).length;
// C2
let total = (mVariable as string).length;

console.log(total);*/