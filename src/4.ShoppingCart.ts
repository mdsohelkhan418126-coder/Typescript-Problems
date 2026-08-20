// shoppingCart
type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const shoppingCart = (products: Product[]): number => {
  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  return totalPrice;
};
const products: Product[] = [
  { id: 1, name: 'Product A', price: 10, quantity: 2 },
  { id: 2, name: 'Product B', price: 20, quantity: 1 },
  { id: 3, name: 'Product C', price: 15, quantity: 3 },
];
console.log(shoppingCart(products)); // returns 95
