import React from "react";
import "./FirstSection.css";
import Typical from "react-typical"

function FirstSection() {
    return (
        <section className="main-section">
            <div width="normal" className="first-div">
                <div direction="row" className="section-div">
                    <div direction="column" width="auto" className="right-column">
                        <h1 className="main-heading">Deja que tus clientes te contacten por {' '}<br></br>
                        <span>
                        <Typical 
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                "Video llamada 📹",
                                3000,
                                "Llamada de voz 📞",
                                3000,
                                "Chat 💬",
                                3000,
                                "Correo 📨",
                                3000
                            ]}
                        /></span>
                        <br></br>con solo <span className="highlight">un enlace</span>.</h1>
                        <p className="main-paragraph">Optimiza tus canales de comunicación en un enlace y agrega la experiencia de compras en tiempo real para mejorar la experiencia de tus clientes.</p>
                        <a href="https://admin.useonedoor.co/registro" target="_blank"><button className="main-button">PRUEBALO GRATIS</button></a>
                    </div>
                    <div className="left-column">
                        <img src="../call-centre.png" className="main-image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstSection;