function ShopItem(props){
  const card = props.data
  return(
    <div className = "item">
      <img className = "item__image" src = {card.img}></img>
      <h2 className = "item__name">{card.name}</h2>
      <p className = "item__color">{card.color}</p>
      <span className="item__price">${card.price}</span>
      <button className="item__button">ADD TO CART</button>
    </div>
  )
}

export default ShopItem