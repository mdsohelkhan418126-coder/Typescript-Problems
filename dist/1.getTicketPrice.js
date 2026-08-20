"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// getTicketPrice function calculates the ticket price based on the age of the person
const getTicketPrice = (age) => {
    if (age < 5) {
        return 0;
    }
    else if (age >= 5 && age <= 12) {
        return 100;
    }
    else if (age >= 13 && age <= 69) {
        return 200;
    }
    return 120;
};
console.log(getTicketPrice(4)); // returns 0
console.log(getTicketPrice(10)); // returns 100
console.log(getTicketPrice(30)); // returns 200
console.log(getTicketPrice(75)); // returns 120
//# sourceMappingURL=1.getTicketPrice.js.map