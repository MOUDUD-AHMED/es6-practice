class Parent {
    constructor(){
        this.fatherName = "Timberly";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.babyName = name;
    }
    getFullName(){
        return this.babyName + " " + this.fatherName;
    }
}

const baby = new Child("Lullu");
const baby2 = new Child("Tommy");
console.log(baby);
console.log(baby2);
