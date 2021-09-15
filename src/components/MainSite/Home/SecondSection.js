import React from "react";
import "./SecondSection.css";
import SocialProof from "../Home/component/SocialProof";

function SecondSection() {
    return (
        <section className="second-section">
            <div width="narrow" className="social-proof">
                <div direction="column" className="div-info">
                    <h4 className="social-proof-header">
                        Ayudando a generar más de <span className="number-calls">800.000</span> videollamadas al mes
                    </h4>
                    <div className="section-images-proof">
                        <SocialProof />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondSection;