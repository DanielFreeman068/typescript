abstract class Vehicle {
    constructor(public brand: string) {}

    abstract startEngine():void;
    
    displayBrand():void{
        console.log(`${this.brand} is the brand name`)
    }
}

class Car extends Vehicle{
    startEngine(): void {
        console.log(`Engine started for ${this.brand}`)
    }
}

class Motorcycle extends Vehicle {
    startEngine() {
        console.log(`Engine started for a ${this.brand} instead`);
    }
}
let vroom = new Car('Ford');
vroom.startEngine();
vroom.displayBrand();

let motorcycle = new Motorcycle('yamaha');
motorcycle.startEngine();
