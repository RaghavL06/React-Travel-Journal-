import React from "react"
import Location from "../images/location_updated.png"

export default function Travel(props){
    
    return(
        <div className="travel">
            <img src={`../images/${props.place.img}`} alt="Not work"/>
            <div className="info">
                <div className="firstRow">
                    <img src={Location} />
                    <h5>{props.place.placeName}</h5>
                    <a href={props.place.map}>View on Google Maps</a>
                </div>
                <h2>{props.place.visitedPlace}</h2>
                <p>{props.place.description}</p>
            </div>
        </div>
    )
}