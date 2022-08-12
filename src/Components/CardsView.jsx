import ShopCard from "./ShopCard"

function CardsView(props){
  return(
    <div className = "cards">
      {props.items.map((element, id) => {
        return(<ShopCard key = {id} data = {element}/>)
      })}
    </div>
  )
}

export default CardsView