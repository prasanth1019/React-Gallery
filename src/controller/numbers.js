import React from 'react';

const Numbers = (props) => {
    const pressedNumber = (e) => {
        // console.log(e.target.value);
        props.parentCB(e.target.value);
    }
    return(<button className="btn" value={props.value} id={props.value} onClick={(e) => pressedNumber(e)} >{props.value}</button>)
}

export default Numbers