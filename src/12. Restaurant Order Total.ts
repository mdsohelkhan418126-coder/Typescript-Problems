interface Items {
  name: string;
  price: number;
}

const calculateOrderTotal = (items: Items[]): number => {
  const total = items.reduce((sum :number, item:Items) => sum + item.price, 0);
  return total;
};

console.log(
  calculateOrderTotal([
    { name: 'Burger', price: 250 },
    { name: 'Fries', price: 90 },
    { name: 'Soda', price: 60 },
  ]),
);
console.log(calculateOrderTotal([{ name: 'Pizza', price: 500 }]));
console.log(calculateOrderTotal([]));
