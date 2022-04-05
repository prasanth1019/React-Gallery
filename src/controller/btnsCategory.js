import React from "react"


const BtnsCategory = props => {

    // const [defaultSearch, setDefaultSearch] = React.useState("");

    return(
        <>
            <button type="button" id="mountain" value="Mountain Pictures" onClick={(e) => props.populateDefaultSearch("Mountain")} >Mountain</button>
            <button type="button" id="Beaches" value="Beaches Pictures" onClick={(e) => props.populateDefaultSearch("Beaches")} >Beaches</button>
            <button type="button" id="Birds" value="Birds Pictures" onClick={(e) => props.populateDefaultSearch("Birds")}>Birds</button>
            <button type="button" id="Food" value="Food Pictures" onClick={(e) => props.populateDefaultSearch("Food")}>Food</button>
        </>
    )
}

export default BtnsCategory