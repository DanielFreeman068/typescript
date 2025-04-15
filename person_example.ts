class Person {
    constructor(id:number, name: string, ssn:string, email:string){
        this.id = id;
        this._ssn = ssn;
        this.email = email;
    }
    //readonly property can be accessed but not modified
    public readonly id:number;

    //private property can only be accessed inside this class
    private _ssn:string;

    //protected property can be accessed in this class and subclasses
    protected email: string;
}

let alan = new Person(1, "Alan Sanchez", "832-19-8898", "daddysfootsoldier@gmail.com");
console.log(alan);

class Circle {
    static pi: number = 3.14;
    static findArea = (rad: number) => Circle.pi * rad ** 2
}

console.log(Circle.pi) //3.14
console.log(Circle.findArea(10)) //314

abstract class PersonTwo {
    abstract name: string;
}

class Employee extends PersonTwo {
    constructor(name: string) {
        super();
    }
}

let emp: PersonTwo = new Employee("James")