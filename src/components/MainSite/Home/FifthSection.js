import React from "react";
import FeatureImageLeft from "./component/FeatureImageLeft";
import FeatureImageRight from "./component/FeatureImageRight";

function FifthSection() {
    return (
        <>
            <FeatureImageRight 
                title="Un solo enlace para todas tus tiendas"
                description="Crea un enlace para tu marca, agrega sucursales y deja que tus clientes elijan su canal de comunicación preferido para hablar contigo."
                img="./sucursales.png"
            />
            <FeatureImageLeft 
                title="Experiencia virtual de 1 a 1"
                description="Deja que tu personal ayude a los clientes con recomendaciones personales a través de videollamadas y brinde una experiencia más fluida y significativa."
                img="./Videollamada.png"
            />
            <FeatureImageRight 
                title="Posicionate donde sea que tus clientes estén"
                description="Ayuda a tus compradores con consejos de productos en vivo de la forma que mejor prefieran, en el chat y videollamadas.

"
                img="./Customer.png"
            />
        </>
    )
}

export default FifthSection;