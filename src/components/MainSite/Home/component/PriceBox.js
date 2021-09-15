import React from "react";
import "./PriceBox.css";

function PriceBox(props) {
    return (
        <>
            <div direction="column" className={props.style}>
                <h3 className="plan-title">{props.plan}</h3>
                <h2 className="price">{props.price}</h2>
                <p className="price-description">{props.description}</p>
                <ul>
                    <li className="price-list">{props.list1}</li>
                    <li className="price-list">{props.list2}</li>
                </ul>
                <div className="div-button-price">
                    <button className="btn button-price">{props.button}</button>
                </div>
            </div>
        </>
    )
}

export default PriceBox;