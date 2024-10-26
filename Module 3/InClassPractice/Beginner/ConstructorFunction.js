//function User(name, age){
//    this.name = name;
//    this.age = age;

//    this.run = function () {
//        console.log("my name is " + this.name)
//    };
//}

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    run () {
        console.log("Hello my name is "+ this.name);
    }
}

const user = new User("Connie", 31);
user.run();