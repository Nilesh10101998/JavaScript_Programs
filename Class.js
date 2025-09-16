
// class Car {                       //declared a class with name Car

//     constructor(brand, model) {  //constructor is a special function that runs when you create an object (new)

//         this.brand = brand;
//         this.model = model;
//     }

//     drive() {

//         console.log(this.brand + " " + this.model + " is driving...");

//     }

// }

// let car = new Car("Mahindra", "Thar");

// car.drive();

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    myLife(){

        console.log("I am " + this.name + " and I am " + this.age + " years old");
    }

}

let person = new Person("Nilesh", 26);

person.myLife();
