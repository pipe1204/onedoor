import React from "react";
import "./PricesFirstSection.css";
import PriceBox from "../Home/component/PriceBox";
import SixthSection from "../Home/SixthSection";

function PricesFirstSection() {
    return(
        <>
        <section className="main-section">
            <div className="first-div-prices">
                <div className="second-div-prices">
                    <h1 className="heading-prices">Un <span className="highlight">enlace</span> con mucha capabilidad.</h1>
                </div>
                <div className="second-div-prices">
                    <p className="paragraph-prices">Una herramienta para pequeñas, medianas y grandes empresas.</p>
                </div>
            </div>
        </section>
        <section className="secundary-section">
            <div width="normal" className="secundary-first-div">
                <div className="div-prices">
                    <PriceBox 
                        plan="Basic0"
                        price="Gratis"
                        description="Todo lo basico para que empieces tu aventura."
                        list1="Hasta 2 empleados"
                        list2="500 minutos"
                        button="Registrate"
                        style="price-box-1"
                    />
                    <PriceBox 
                        plan="PRO"
                        price="$15 USD / Usuario"
                        description="Para negocios que estan creciendo."
                        list1="Hasta 15 empleados"
                        list2="Llamadas ilimitadas"
                        button="registrate"
                        style="price-box-2"
                    />
                    <PriceBox 
                        plan="Premium"
                        price="Contactanos"
                        description="Ideal para grandes empresas con requisitos comerciales complejos."
                        list1="Mas de 15 empleados"
                        list2="Llamadas ilimitadas"
                        button="Contactanos"
                        style="price-box-3"
                    />
                </div>
            </div>
        </section>
        <SixthSection />
        </>
    )
}

export default PricesFirstSection;