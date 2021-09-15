import React from "react";
import "./FourthSection.css";
import Benefit from "./component/Benefit";

function FourthSection() {
    return (
        <>
            <section className="fourth-section">
                <div width="narrow" className="div-fourth-section">
                    <div className="list-benefits">
                        <Benefit 
                            number="1" 
                            title="Úsalo en cualquier lugar" 
                            description="Lleva tu enlace donde sea que esté tu audiencia y ayúdelos con una consulta o a descubrir nuevos productos"/>
                        <Benefit 
                            number="2" 
                            title="Ventaja competitiva" 
                            description="Crea reglas y enruta las llamadas para redirigir a tus clientes a donde sea que necesiten estar."/>
                        <Benefit 
                            number="3" 
                            title="Incrementa tus ventas" 
                            description="Con OneDoor, 1 de cada 3 clientes regresa de nuevo a tu tienda y gasta hasta un 70% más."/>
                    </div>
                    <div className="div-heading">
                        <h1 className="fourth-section-heading">Abre solo <span className="highlight">OneDoor</span><br></br>(Una puerta).</h1>
                        <p className="fourth-section-paragraph">A tus clientes les encanta chatear, hablar y mirar videos.<br></br>Ahora pueden tener todo esto a un clic de distancia.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FourthSection;