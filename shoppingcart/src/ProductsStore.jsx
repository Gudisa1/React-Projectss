const productsArray = [
  {
    id: "1",
    title: "Coffe",
    price: 4.99,
  },
  {
    id: "2",
    title: "Mobile",
    price: 4.99,
  },
  {
    id: "3",
    title: "Iphone",
    price: 4.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);
  if (productData == undefined) {
    console.log("Product data not found for ID " + id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
