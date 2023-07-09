import "../styles/card.css"

const Card = ({ image, title, price, onClick ,openDeleteDialog}) => {

  return (
    <div className="product__item ">
      <img className="cancel" src="https://cdn-icons-png.flaticon.com/128/753/753345.png" onClick={openDeleteDialog}/>
      <div className="product__content">
        <img className="product__img " src={image} />
        <h5> {title}</h5>
      </div>
      <div className=" info ">
        <span className="product__price ">{price} € </span>
        <img src="https://cdn-icons-png.flaticon.com/128/7541/7541206.png" onClick={onClick} />
      </div>
    </div>
  )
}

export default Card


