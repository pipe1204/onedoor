import React from "react";
import "./AboutFirstSection.css";

function AboutFirstSection() {
    return(
        <>
            <section className="first-section-about">
                <div width="normal" className="first-div-about">
                    <div direction="column" className="second-div-about">
                        <h6 className="small-heading-about">Nosotros</h6>
                        <h1 className="main-heading-about">Nosotros nos encargamos de <span>juntarte</span> con tus clientes. Tu haces que la <span>magia</span> ocurra.</h1>
                        <p className="paragraph-about">Las marcas de moda, artículos para el hogar, ferretería, belleza y muchas más se están poniendo al día, tratando de atraer a los compradores de una manera nueva. 
                        <span className="onedoor"> OneDoor</span> proporciona las herramientas que necesitas para hacer realidad las compras en vivo. Con videollamadas individuales, mensajería en tiempo real y la consolidación 
                        de tus canales de comunicación, las marcas pueden conectar instantáneamente a compradores con sus vendedores, permitiéndoles brindarles información y recomendaciones sobre sus productos.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutFirstSection;
