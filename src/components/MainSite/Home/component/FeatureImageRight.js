import React from "react";
import "./FeatureImageRight.css";

function FeatureImageRight(props) {
    return (
        <>
        <section className="fifth-section">
            <div width="normal" className="first-div-fifth-section">
                <div direction="row" className="second-div-fifth-section">
                    <div direction="column" width="auto" className="left-column-fifth-section">
                        <h3 className="main-title">{props.title}</h3>
                        <p className="paragraph-fifth-section">{props.description}</p>
                    </div>
                    <div height="auto" direction="column" width="auto" className="right-column-fifth-section">
                        <img className="feature-image" src={props.img}/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default FeatureImageRight;