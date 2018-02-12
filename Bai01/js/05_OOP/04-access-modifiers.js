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
}
var courseObj = new Course('C012', 'Mobile', 23);
// courseObj.showCourseInfo();
console.log(courseObj.id);
var courseMobileObj = new CourseMobile('C013', 'Mobile', 23, "John");
// courseMobileObj.showCourseInfo();
/*
                                        inside     outside      subclass
        public					+					 +						+
        private					+          -            -
        protected       +          +            -

*/ 
