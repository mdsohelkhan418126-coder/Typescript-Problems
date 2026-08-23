"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Problem 1 — Battery Level Status
function getBatteryStatus(percentage) {
    if (percentage >= 0 && percentage <= 20) {
        return 'Low';
    }
    else if (percentage >= 21 && percentage <= 50) {
        return 'Medium';
    }
    else if (percentage >= 51 && percentage <= 90) {
        return 'High';
    }
    else {
        return 'Full';
    }
}
function formatBookingConfirmation(booking) {
    return `${booking.name}'s table for ${booking.guests} uests is confirmed at ${booking.time} `;
}
// Problem 3 — Weekly Expense Tracker
function calculateWeeklyTotal(expenses) {
    const total = expenses.reduce((sum, num) => sum + num, 0);
    return total;
}
function getTrafficAction(light) {
    if (light === 'red') {
        return 'Stop';
    }
    else if (light === 'yellow') {
        return 'Slow Down';
    }
    else if (light === 'green') {
        return 'Go';
    }
    return 'Invaild';
}
function getQuizSummary(scores) {
    const total = scores.reduce((sum, num) => sum + num, 0);
    const average = scores.length === 0 ? 0 : total / scores.length;
    return {
        total,
        average,
    };
}
//# sourceMappingURL=Battery%20Level%20Status.js.map