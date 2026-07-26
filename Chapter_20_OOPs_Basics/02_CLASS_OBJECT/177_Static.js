class Student {

    constructor(name_student, age, phoneNo) {
        this.name_student = name_student;
        this.age = this.age;
        this.phoneNo = this.phoneNo;

    }

    static name = "Playwright2x";
    static mentor_name = "Pramod";

    static display() {
        console.log("Hi, I am common in function");

    }

}
const s1 = new Student("Sree", 28, "9459409");
const s2 = new Student("vidya", 29, "985678594");

console.log(s1.name_student);
console.log(s2.name_student);

console.log(Student.name);
console.log(Student.mentor_name);



