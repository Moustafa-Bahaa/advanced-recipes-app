import "../styles/card.css"

const CartItem = ({ image, title, price, handleDecrement, handleIncrement, quantity ,handleRemove}) => {

   
    return (
        <div className="product__item ">
            <img className="cancel" src="https://cdn-icons-png.flaticon.com/128/753/753345.png" onClick={handleRemove}/>
            <div className="product__content">
                <img className="product__img " src={image} />
                <h5> {title}</h5>
            </div>
            <div className=" info ">
                <span className="product__price ">{price} € </span>
                <div className="quantity">
                    <i className="fa fa-minus-circle" aria-hidden="true" onClick={handleDecrement}></i>
                    <h3>{quantity}</h3>
                    <i className="fa fa-plus-circle" aria-hidden="true" onClick={handleIncrement}></i>
                </div>
            </div>
            
        </div>
    )
}

export default CartItem


