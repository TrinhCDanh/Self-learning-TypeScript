class Course {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showCourseInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
class CourseMobile extends Course {
    constructor(id, name, price, author) {
        super(id, name, price);
        this.author = author;
    }
    showCourseInfo() {
        super.showCourseInfo();
        console.log(this.author);
    }
}
var courseObj = new Course('C012', 'Mobile', 23);
courseObj.showCourseInfo();
var courseMobileObj = new CourseMobile('C013', 'Mobile', 23, "John");
courseMobileObj.showCourseInfo();
