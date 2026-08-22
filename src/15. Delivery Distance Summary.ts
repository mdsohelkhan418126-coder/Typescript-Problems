type Distance = {
  total: number;
  average: number;
};

const getDistanceSummary = (distances: number[]): Distance => {
  const total: number = distances.reduce((sum, num) => sum + num, 0);
  const average = total / distances.length;

  return {
    total,
    average: isNaN(average) ? 0 : average,
  };
};
console.log(getDistanceSummary([4, 6, 5, 9]));
console.log(getDistanceSummary([10, 10]));
console.log(getDistanceSummary([]));
