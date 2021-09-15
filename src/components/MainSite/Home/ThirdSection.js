import React, { useState } from "react";
import "./ThirdSection.css"
import Typical from "react-typical"

function ThirdSection() {
    const [link, setLink] = useState("tutienda");

    function handleChange(event) {
        let value = event.target.value
        let newLink = value.replace(/\s/g, "-");

        return setLink(newLink);
    }

    return(
        <>
            <section className="third-section">
                <div  className="third-div">
                    {/* <div className="routing-div">
                        <h2 className="routing-heading">Internal customer communication is <span className="complex">complex.</span><br></br>Manage customer and workforce communications <br></br>at scale</h2>
                        <p className="routing-paragraph">Increase operational efficiency by using new channels and smart routing <br></br>to mobilize workers and serve customers faster.</p>
                        <img src="./routing.png" className="routing-image"/>
                    </div> */}
                    <div className="div-image-videocall">
                        <h2 className="be-there">Vende más. Virtualmente.</h2>
                        <p className="subheading-circle">Conéctate con clientes en el canal que ellos quieran interactuar - desde mensajes de texto hasta correos electrónicos, llamadas telefónicas y videos, todo dentro de un <span className="highlight">único y poderoso enlace.</span>.</p>
                        <h3 className="sample-link">useonedoor.co/
                        <span className="sample-link-change">
                        <Typical 
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                "adidas",
                                3000,
                                "rubyshoes",
                                3000,
                                "importadorafiat",
                                3000,
                                "sammys",
                                3000,
                                "theglowstore",
                                3000,
                                "mango",
                                3000,
                                "questcolombia",
                                3000
                            ]}
                        /></span></h3>
                        <video width="520" height="440" playsInline autoPlay muted loop className="video">
                            <source src="./call-loop.mp4" type="video/mp4" />
                        </video>
                    </div>
                    {/* <h4 className="link-heading">Try yours!</h4> */}
                    <div className="input-div">
                        <input type="text" className="input-link" id="input" placeholder="tutienda" onChange={handleChange}></input>
                        <h3 className="business-link">useonedoor.co/<span className="tienda-name">{link}</span></h3>
                        <a href="https://admin.useonedoor.co/registro" target="_blank"><button style={{ visibility: link === "" || link === "tutienda" ? "hidden" : "visible" }} className="btn link-button">Registralo</button></a>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ThirdSection;