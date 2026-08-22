"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getSingalStatus = (percentage) => {
    if (percentage >= 0 && percentage <= 25) {
        return 'Poor';
    }
    else if (percentage >= 26 && percentage <= 55) {
        return 'Fair';
    }
    else if (percentage >= 56 && percentage <= 85) {
        return 'Good';
    }
    else {
        return 'Excellent';
    }
};
console.log(getSingalStatus(90));
//# sourceMappingURL=10.WifiRouter.js.map