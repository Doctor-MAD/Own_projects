// Inheritance
// - Inheriting properties and methods from it's parent. 

// Here Student is a child class and School is parent class. We are inheriting values from school to student with the help of extend keyword. 
// While creating school class, we have already used constructor, so in student class we have to use only super() and parameters of school class. 
class School {
    constructor(schoolName,address){
        this.schoolName = schoolName;
        this.address = address;
    } 
    prayer = ()=> {
        console.log("Do Prayer.")
    }
}

class Student extends School{
    constructor (name,age,profession,schoolName,address){
        super(schoolName,address);
        this.name =  name;
        this.age = age;
        this.profession = `I am a/an ${profession}`
    } 
    teach = ()=>{
        console.log("I love gaming, traveling and as a profession I am Software Developer at Google.")
    }
    }


const student1 = new Student("Akash", 31, "Software Developer", "Swaminarayan", "Ahmedabad");
const student2 = new Student("DoctorMAD", 31, "Computer Gamer");
console.log(student1, student2);  

// We can access all values with the help of methods also 
console.log(student1.age);
console.log(student1.name);
console.log(student1.schoolName);

// So when you check in chrome console, for student class you can see the prototype as school but in school prototype will be object (default).
// It is also known as prototype chaining. 

// We can not use extend key word with normal function so for that we can follow inheritance concept as below,


// Pending as this function is not working so......
// function vehicle (vehicleName){
//     this.name = vehicleName
// }

// function Car(carName){
//     this.carName = carName;
// }

// function Truck(truckName){
//     this.truckName =  truckName;
// }

// const nexon =  new Car("Tata Nexon");
// const ashok = new Truck("Ashok Leyland");
// console.log(nexon, ashok);

// Car.__proto__ = vehicle; 


// Object properties:----

