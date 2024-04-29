import { TYPES } from "../actions/shoppingAction";

const getProducts = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  return data;
};

const getQuantityCartItems = () => {
  return JSON.parse(localStorage.getItem("cart"))
}

export const shoppingInitialState = {
  products: await getProducts(),
  cart: getQuantityCartItems(),
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      //Obtenemos la información del item que ingresaremos al carrito
      let newItem = state.products.find((item) => item.id === action.payload);

      //Vemos si el item ya está en el carrito
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
      //Si el item ya se encuentra en el carrito solamente modificamos su propiedad quantity
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
          //Si el item no se encuentra aún dentro del carrito, añadimos el item al carrito pero con una nueva propiedad (quantity)
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
  }
}
