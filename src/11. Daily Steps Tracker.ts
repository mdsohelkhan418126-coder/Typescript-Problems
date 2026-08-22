const calculateWeeklySteps = (steps: number[]): number => {
  const total = steps.reduce((sum, num) => sum + num, 0);
  return total;
};
console.log(calculateWeeklySteps([3000, 5200, 4100]));
console.log(calculateWeeklySteps([7000, 6500]));
console.log(calculateWeeklySteps([]));
