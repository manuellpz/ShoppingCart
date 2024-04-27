const ProductItem = ({ data, addToCart }) => {
  const { id, title, image, price } = data;
  return (
    <div className="item">
      <img src={image} alt="img" />
      <h4>{title}</h4>
      <h3>${price}</h3>
      <button className="btnAdd" onClick={() => addToCart(id)}>
        Agregar A Carrito <i className="fa-solid fa-cart-plus fa-lg"></i>
      </button>
    </div>
  );
};

export default ProductItem;
