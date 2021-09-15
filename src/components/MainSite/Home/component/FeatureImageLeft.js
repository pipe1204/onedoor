import React from "react";
import "./FeatureImageLeft.css";

function FeatureImageLeft(props) {
    return (
        <>
        <section className="fifth-section">
            <div width="normal" className="first-div-fifth-section">
                <div direction="row" className="second-div-fifth-section">
                    <div height="auto" className="left-column-fifth-section">
                        <img className="feature-image" src={props.img}/>
                    </div>
                    <div direction="column" width="auto" className="right-column-fifth-section">
                        <h3 className="main-title-left">{props.title}</h3>
                        <p className="paragraph-fifth-section-left">{props.description}</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default FeatureImageLeft;