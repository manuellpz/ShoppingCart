import { useState } from "react";

const Cart = ({ cart, goHome, deleteCartItem }) => {
  let subtotal = 0;

  return (
    <div className="cart-container">
      <h2>Carrito</h2>
      <hr />
      {cart.length > 0 ? (
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
                <button
                  className="btn-delete"
                  onClick={() => deleteCartItem(id)}
                >
                  Eliminar
                </button>
                
              </div>
            );
          })}
          <hr />
          <div className="subtotal">
            <h1>Subtotal: ${subtotal.toFixed(2)}</h1>
          </div>
          <button className="btn-home" onClick={goHome}>
            Regresar al Catalogo
          </button>
        </div>
      ) : (
        <div>
          <h2>NO HAS AGREGADO PRODUCTOS AL CARRITO</h2>
          <button className="btn-home" onClick={goHome}>
            Regresar al Catalogo
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
