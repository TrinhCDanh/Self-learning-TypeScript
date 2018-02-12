/*// Thuộc tính phải có kye tự _ ở phía trước thì mới dùng get, set
class Course {

	private _name: string;

	constructor(name: string) {
		this._name = name;
	}

	showCourseInfo(): void {
		console.log(`${this._name}`);
	}

	public get name() : string {
		return this._name;
	}

	public set name(v : string) {
		this._name = v;
	}
}

var courseObj = new Course("TypeScript");

console.log(courseObj);

console.log("Name: " + courseObj.name);

courseObj.name = "TypeScript Tranning";

console.log("Name: " + courseObj.name);

*/