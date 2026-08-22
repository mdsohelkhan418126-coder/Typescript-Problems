interface Employee {
  name: string;
  onDuty: boolean;
}

const findOnDutyEmployees = (employees: Employee[]): Employee[] => {
  const onDutyEm: Employee[] = employees.filter(
    employee => employee.onDuty === true,
  );
  return onDutyEm;
};
console.log(
  findOnDutyEmployees([
    { name: 'Lima', onDuty: true },
    { name: 'Karim', onDuty: false },
  ]),
);
console.log(findOnDutyEmployees([{ name: 'Nusrat', onDuty: false }]));
console.log(findOnDutyEmployees([]));
