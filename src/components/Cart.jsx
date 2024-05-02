import { useState } from "react";

const Cart = ({ cart, goHome }) => {
  let subtotal = 0;

  return (
    <div className="cart-container">
      <h2>Carrito</h2>
      <hr />
      <div className="list-products">
        {cart.map((item) => {
          const { id, image, price, quantity, title } = item;
          subtotal += quantity * price;
          return (
            <div className="product-row">
              <p>
                <img src={image} alt="" />
              </p>
              <p>{title}</p>
              <p>${price}</p>
              <p>x{quantity}</p>
              <p>${quantity * price}</p>
              <button className="btn-delete">Eliminar</button>
            </div>
          );
        })}
        <hr />
        <div className="subtotal">
          <h1>Subtotal: ${subtotal}</h1>
        </div>
        <button className="btn-home" onClick={goHome}>Regresar al Catalogo</button>
      </div>
    </div>
  );
};

export default Cart;
