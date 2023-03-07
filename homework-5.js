// task 1
class Fruit {
    constructor(name) {
        this.name = name;
    }
}
class Apple extends Fruit {
    constructor(name) {
        super(name); // added super to fix an error
        this.name = name;
        this.created = Date.now();
    }
}

new Apple(); // no errors


// task 2
class Clock {
    timer;

    render = () => {
        console.log(new Date().toLocaleTimeString());
    };

    stop = () => {
        clearInterval(this.timer);
    };

    start = () => {
        this.timer = setInterval(this.render, 1000);
    };
}

let clock = new Clock();
clock.start();
// Output:
// 01:15:00
// 01:15:01
// 01:15:02

module.exports = { Clock, default: Clock };