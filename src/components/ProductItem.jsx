const ProductItem = ({data}) => {
    const {title, image, price} = data
    return (
        <div className="item">
            <img src={image} alt="img" />
            <h4>{title}</h4>
            <h3>${price}</h3>
            <button className="btnAdd">Agregar A Carrito</button>
        </div>
    )
}

export default ProductItem;