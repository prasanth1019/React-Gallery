import React from "react"

const DisplayArea = props => {
    const cn = `${props.responseData?.length === undefined ? "border-none" : "display-section-area"}`

    return (
        <>
        <section className={cn}>
        {props.responseData?.map( (value, index) => {
                let name = value?.id + "_" + value?.secret + "_m.jpg"
                let src = "https://farm66.staticflickr.com/" + value?.server + "/" + name
                return <div key={index} style={{"width": "220px", "height": "165px", "overflow": "hidden", "margin-bottom": "5px" }}>  <img src = {src} key={index} alt={value?.title} className="image-size" /> </div>
        })}
        </section>
        </>
    )
}

export default DisplayArea