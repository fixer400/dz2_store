function ShopCard(props){
  const card = props.data
  return(
    <div className="card" style={{backgroundImage:`url(${card.img})`,backgroundSize:'contain'}}>
      <h2 className="card__name">{card.name}</h2>
      <p className="card__color">{card.color}</p>
      <div className="card__price">
        <span>${card.price}</span>
        <button>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ShopCard