

const ActionBtn = (props) => {

    const handleClick = (e) => {
        let action = {
            "value": e.target.value,
            "operation": e.target.id
        }
        props.actionCB(action)
    }

    return(
        <button className="btn" value={props.value} id={props.operation} onClick={(e) => handleClick(e)} >{props.value}</button>
    )
}

export default ActionBtn