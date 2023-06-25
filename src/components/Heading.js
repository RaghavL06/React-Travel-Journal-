import React from "react"
import worldLogo from "../image_updated.png"

export default function Heading(){
    return(
        <div className="heading">
            <img src={worldLogo} alt="Not work" width="30px" heigth="30px"/>
            <h3>travelJournal</h3>
        </div>
    )
}