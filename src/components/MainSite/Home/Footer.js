import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";


function Footer() {
    return(
        <>
            <div className="main-footer">
                <div className="container dotted-space">
                    <div className="div-footer">
                        <div className="col">
                            <img src="../Logo-no-background.png" className="logo-footer"/>
                        </div>
                        <div className="col">
                            <h5 className="footer-heading">Empresa</h5>
                            <ul className="list-unstyled">
                                <Link to="/nosotros" className="footer-link"><li className="footer-link">Nosotros</li></Link>
                                <Link to="/terminos-y-condiciones" className="footer-link"><li className="footer-link">Términos y Condiciones</li></Link>
                                <Link to="/politica-de-privacidad" className="footer-link"><li className="footer-link">Politica de Privacidad</li></Link>
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className="footer-heading">Producto</h5>
                            <ul className="list-unstyled">
                                <Link to="/precios" className="footer-link"><li className="footer-link">Precios</li></Link>
                                <h5 className="footer-contact-heading">Contactanos</h5>
                                <a href="https://useonedoor.co/onedoor" className="contact">useonedoor.co/onedoor</a>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <p className="col-sm hecho">
                            &copy;{new Date().getFullYear()} OneDoor LTDA. <br></br>Hecho con ❤️ en Cali - Colombia. 
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;   
                