import React from 'react';
import "./Benefit.css";

function Benefit(props) {
    return(
        <>
            <div className="div-benefit">
                <div className="sub-div-benefit">
                    <div width="24px" direction="column" className="div-number-benefit">
                        <div width="24px" height="24px" className="number-benefit">
                            <span font-size="s12" font-weight="black" className="number">{props.number}</span>
                        </div>
                        <div className="div-line"></div>
                    </div>
                    <div width="auto" direction="column" className="div-info-benefit">
                        <h5 width="150px" className="benefit-title">{props.title}</h5>
                        <p width="230" font-weight="medium" className="benefit-paragraph">{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benefit;