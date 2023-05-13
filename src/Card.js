import React from "react"

import cardImg from "./images/katie-zaferes.png"
import star from "./images/star.png"

function Card() {
    return (
        <div className="card">
            <div className="card-img-container card-img-sold">
                <img src={cardImg} className="card-img"/>
            </div>
            <div className="card-content">
                <p className="card-title">
                    <img src={star} className="card-star"/>
                    <span>5.0</span>
                    <span className="gray">(6) • </span>
                    <span className="gray"> USA</span>
                </p>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </div>
        </div>
    )
}

export default Card