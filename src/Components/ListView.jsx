import ShopItem from "./ShopItem"
function ListView(props){
  
  return(
    <div className="list">
      {props.items.map((element, id) => {
        return(<ShopItem key = {id} data = {element}/>)
      })}
    </div>
  )
}

export default ListView