// emergencyPatient

interface GeneralPatient {
  name: string;
  age: number;
  type: 'general';
}
interface Emergency {
  name: string;
  age: number;
  type: 'emergency';
  emergencyLevel: 1 | 2 | 3;
}

const getPatientStatus = (patient: GeneralPatient | Emergency): string => {
  if (patient.type === 'general') {
    return 'General Patient';
  } else if (patient.type === 'emergency') {
    if (patient.emergencyLevel === 1)
      return 'emergency patient';
    else if (patient.emergencyLevel === 2) {
      return 'serious emergency';
    }
    return 'Moderate emergency';
  }
  return 'Moderate emergency';
};

console.log(
  getPatientStatus({
    name: 'Hasan',
    age: 45,
    type: 'emergency',
    emergencyLevel: 3,
  }),
);
