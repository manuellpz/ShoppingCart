import { useReducer, useState } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import ProductItem from "./ProductItem";
import { TYPES } from "../actions/shoppingAction";

const Products = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  const [rangeValue, setRangeValue] = useState(0);
  const [categorie, setCategorie] = useState("");

  const handleMinPrice = (e) => {
    setRangeValue(e.target.value);
  };
  const handleChangeCategories = (e) => {
    setCategorie(e.target.value);
  };

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  let filteredProducts = products.filter(
    (p) =>
      p.price >= rangeValue && (p.category === categorie || categorie === "")
  );

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Productos</h2>
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
        {categorie === "all"
          ? products.map((item) => (
              <ProductItem data={item} key={item.id} addToCart={addToCart} />
            ))
          : filteredProducts.map((item) => (
              <ProductItem data={item} key={item.id} addToCart={addToCart} />
            ))}
      </article>
    </>
  );
};
export default Products;
