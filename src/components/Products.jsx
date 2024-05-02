import { useReducer, useState } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import ProductItem from "./ProductItem";
import Cart from "./Cart";
import { TYPES } from "../actions/shoppingAction";

const Products = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  const [rangeValue, setRangeValue] = useState(0);
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState("Home")

  const handleMinPrice = (e) => {
    setRangeValue(e.target.value);
  };
  const handleChangeCategories = (e) => {
    setCategory(e.target.value);
  };

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  localStorage.setItem("cart",JSON.stringify(cart));

  let filteredProducts = products.filter(
    (p) =>
      p.price >= rangeValue && (p.category === category || category === "all")
  );

  const goCart = () => {
    setPage("Cart")
  }
  const goHome = () => {
    setPage("Home")
  }


  return (
    page === "Home" 
    ?
    <div>
      <h2 style={{ textAlign: "center" }}>Productos</h2>
      <div className="cart" onClick={goCart}>
        <i className="fa-solid fa-shopping-cart fa-lg"></i>
        <strong className="counter">{cart.length}</strong>
      </div>
      <div className="filters">
        <div>
          <label htmlFor="minPrice">A partir de: </label>
          <input
            type="range"
            id="minPrice"
            min="0"
            max="900"
            onChange={handleMinPrice}
          />
          <strong>${rangeValue}</strong>
        </div>
        <div>
          <label htmlFor="categories">Categorias: </label>
          <select id="categories" onChange={handleChangeCategories}>
            <option value="all">Todo</option>
            <option value="electronics">Electrónica</option>
            <option value="jewelery">Joyeria</option>
            <option value="men's clothing">Ropa Hombre</option>
            <option value="women's clothing">Ropa Mujer</option>
          </select>
        </div>
      </div>
      <br />
      <br />
      <article className="container">
        {filteredProducts.length === 0 ? (
          <h3>¡NO SE ENCONTRO PRODUCTO!</h3>
        ) : (
          filteredProducts.map((item) => (
            <ProductItem data={item} key={item.id} addToCart={addToCart} />
          ))
        )}
      </article>
    </div>
    :
    <Cart cart={cart} goHome={goHome}/>
  );
};
export default Products;
