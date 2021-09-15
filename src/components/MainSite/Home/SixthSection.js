import React from "react";
import "./SixthSection.css";

function SixthSection() {
    return (
        <>
            <section className="sixth-section">
                <div className="customer-review">
                    <h5 className="review-title">Clientes aman OneDoor</h5>
                    <h1 className="review">"¡ANGELA HIZO LA EXPERIENCIA DE COMPRAS FUERA DE LÍNEA TAN AGRADABLE, COMO SI YO ESTUVIERA ALLÍ!"</h1>
                </div>
                <div width="narrow" className="first-div-sixth-section">
                    <div className="div-content">
                        <h1 className="call-to-action-title">Deja de imaginarte el servicio al cliente perfecto. <span className="build">Construyelo.</span></h1>
                        <p className="call-to-action-description">Crea tu enlace gratis, optimiza todos tus canales de comunicación<br></br>y aumenta las ventas junto con la satisfacción del cliente.</p>
                        <a href="https://admin.useonedoor.co/registro" target="_blank"><button className="btn cta">EMPIEZA GRATIS</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SixthSection;