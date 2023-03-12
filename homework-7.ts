// task 1
interface Hasname {
    name: string;
}

class Doctor implements Hasname {
    constructor(public name: string, public profession: string) { }
}

function getNames<T extends Hasname>(objects: T[]): string[] {
    return objects.map((x) => x.name);
}

const doctor1 = new Doctor("Ivan", "asdfg");
const doctor2 = new Doctor("Petro", "asdfg");
const doctors = [doctor1, doctor2];

console.log(getNames(doctors));


// task 2
enum Size { Small, Medium, Large }

interface SizeProperties {
    width: number;
    height: number;
    color: string;
}

function getDimensions(size: Size): SizeProperties {
    switch (size) {
        case Size.Small:
            return { width: 10, height: 10, color: "red" };
        case Size.Medium:
            return { width: 20, height: 20, color: "green" };
        case Size.Large:
            return { width: 30, height: 30, color: "blue" };
        default:
            throw new Error("Invalid size value");
    }
}

const smallSizeProperties = getDimensions(Size.Small);
console.log(smallSizeProperties); // Output: { width: 10, height: 10, color: "red" }

const mediumSizeProperties = getDimensions(Size.Medium);
console.log(mediumSizeProperties); // Output: { width: 20, height: 20, color: "green" }

const largeSizeProperties = getDimensions(Size.Large);
console.log(largeSizeProperties); // Output: { width: 30, height: 30, color: "blue" }


// task 3
class Vehicle {
    protected make: string;
    protected model: string;
    readonly year: number;
    private electric: boolean;

    constructor(make: string, model: string, year: number, electric: boolean) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.electric = electric;
    }

    start(): void {
        console.log(`Starting the ${this.make} ${this.model} (${this.year})...`);
    }
}

class Car extends Vehicle {
    private color: string;

    constructor(make: string, model: string, year: number, electric: boolean, color: string) {
        super(make, model, year, electric);
        this.color = color;
    }

    public drive(): void {
        console.log(`Driving the ${this.color} ${this.make} ${this.model} (${this.year})...`);
    }
}

const myCar = new Car("Honda", "Civic", 2022, false, "blue");
myCar.start(); // Output: Starting the Honda Civic (2022)...
myCar.drive(); // Output: Driving the blue Honda Civic (2022)...
