// searchProduct

interface Product {
  name: string;
  price: number;
  catagray: string;
}

const findProduct = (products: Product[], catagray: string): Product[] => {
  const catagrayProducts: Product[] = products.filter(
    (products: Product) => products.catagray === catagray,
  );
  return catagrayProducts;
};

const product = [
  {
    name: 'macbon',
    price: 5000,
    catagray: 'laptop',
  },
  {
    name: 'endice',
    price: 5000,
    catagray: 'laptop',
  },
  {
    name: 'mobile',
    price: 5000,
    catagray: 'iphon',
  },
];
 console.log(findProduct( product,'laptop'))