

const Square = (props) => {

    const handlingClick = (e) => {
        props.habdleParentClick(e.target.id)
    }

    return (<input type="button" className="square" id={props.values} onClick={(e) => handlingClick(e)} value={props.children} ></input>)

}

export default Square;