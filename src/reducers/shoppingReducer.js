const getProducts = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  return data;
};

export const shoppingInitialState = {
  products: await getProducts(),
  cart: [],
};

export function shoppingReducer(state, action) {}
