import React from "react";
import FeatureImageRight from "../Home/component/FeatureImageRight";
import FeatureImageLeft from "../Home/component/FeatureImageLeft";

function AboutSecondSection() {
    return(
        <>
            <FeatureImageLeft 
                title="Tecnología trabajadora nacida del trabajo duro"
                description="Juan Daza, Daniel Eslava, Martin Valentino y Andrés González fundaron OneDoor en 2021 en medio de la pandemia. 
                Nuestros fundadores estaban aterrorizados y entristecidos al ver cómo las tiendas que no tenían presencia 
                en línea estaban cerrando y despidiendo a sus empleados en medio de una situación tan difícil. Juntos, 
                se propusieron crear una forma más personal y conveniente de comprar que refleje cómo los humanos interactuamos en el siglo XXI.
"
                img="../teamwork.png"
            />
            <FeatureImageRight 
                title="Comercio electrónico. Hecho Humano"
                description="Con las compras sociales, los clientes exigen una mejor manera de interactuar con 
                su tienda favorita en tiempo real. Estamos preparados para ayudarlos a fortalecer las relaciones con sus clientes 
                uniendo las comunicaciones en todo tu negocio, desde el departament de mercadeo y ventas hasta el servicio al cliente y las operaciones."
                img="../human touch.png"
            />
        </>
    )
}

export default AboutSecondSection;

//