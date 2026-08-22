"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findOnDutyEmployees = (employees) => {
    const onDutyEm = employees.filter(employee => employee.onDuty === true);
    return onDutyEm;
};
console.log(findOnDutyEmployees([
    { name: 'Lima', onDuty: true },
    { name: 'Karim', onDuty: false },
]));
console.log(findOnDutyEmployees([{ name: 'Nusrat', onDuty: false }]));
console.log(findOnDutyEmployees([]));
//# sourceMappingURL=14.%20Employee%20On-Duty%20Finder.js.map