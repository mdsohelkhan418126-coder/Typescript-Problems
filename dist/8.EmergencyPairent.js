"use strict";
// emergencyPatient
Object.defineProperty(exports, "__esModule", { value: true });
const getPatientStatus = (patient) => {
    if (patient.type === 'general') {
        return 'General Patient';
    }
    else if (patient.type === 'emergency') {
        if (patient.emergencyLevel === 1)
            return 'emergency patient';
        else if (patient.emergencyLevel === 2) {
            return 'serious emergency';
        }
        return 'Moderate emergency';
    }
    return 'Moderate emergency';
};
console.log(getPatientStatus({
    name: 'Hasan',
    age: 45,
    type: 'emergency',
    emergencyLevel: 3,
}));
//# sourceMappingURL=8.EmergencyPairent.js.map