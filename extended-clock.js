const clock = require('./homework-5').default;

class ExtendedClock extends clock {

    constructor(precision = 1000) {
        super();
        this.precision = precision;
    }

    start = () => {
        this.timer = setInterval(this.render, this.precision);
    };
}

let extClock = new ExtendedClock(2000);
extClock.start();

// Output:
// 01:49:06
// 01:49:08
// 01:49:10