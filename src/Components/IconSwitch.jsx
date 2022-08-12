function IconSwitch(props){

  return(
    <div className="switcher">
        <span onClick ={props.onSwitch} className="material-icons">{props.icon}</span>
    </div>

  )
}

export default IconSwitch