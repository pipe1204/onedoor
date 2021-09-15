import React from "react";
import "./Privacy.css";
import Navbar from "../Home/Navbar/Navbar"

function Privacy() {
    return (
        <>
            <section className="main-section-privacy">
                <div className="language-div">
                    <select className="language">
                        <option>🇺🇸 English</option>
                        <option>🇨🇴 Español</option>
                    </select>
                </div>
                <div className="first-div-privacy">
                    <h1 className="main-heading-terms">POLÍTICA DE PRIVACIDAD DE ONEDOOR</h1>
                    <p className="terms-paragraph">Esta Política de Protección de Datos Personales se aplicará a todas las Bases de Datos y/o Archivos que contengan Datos
                    Personales que sean objeto de Tratamiento por parte de Onedoor LTDA (en adelante, “OneDoor”)., considerada como
                    responsable del tratamiento de Datos Personales, dando cumplimiento a lo dispuesto en la Ley estatutaria 1581 de 2012 y a su
                    Decreto Reglamentario 1377 de 2013.</p>
                    <p className="terms-paragrah">La presente política será informada a todos los titulares de los datos recolectados o que en el futuro se obtengan en el ejercicio
                    de las actividades comerciales, laborales o demás relativas; de esta manera OneDoor manifiesta que garantiza los derechos de
                    la privacidad, la intimidad y el buen nombre, en el tratamiento de los datos personales, y en consecuencia todas sus actuaciones
                    se regirán por los principios de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida,
                    seguridad y confidencialidad.</p>
                    <p className="terms-paragrah">Con respecto a los datos personales recopilados y procesados ​​en nombre de nuestros clientes, actuamos como Procesadores de datos.</p>
                    <p className="terms-paragrah">El personal que trabaja para nuestros clientes y accede a OneDoor a través de un dispositivo de mano, como un teléfono o una tableta, 
                    también puede proporcionarnos datos personales como parte de los servicios. Dichos datos personales se recopilarán, almacenarán y procesarán de acuerdo con esta política 
                    y la legislación de protección de datos.</p>
                    <h5 className="terms-title">Información que recopilamos de usted</h5>
                    <p className="terms-paragrah">Recopilaremos y procesaremos los siguientes datos sobre usted:</p>
                    <ul>
                        <li className="terms-paragraph"><span className="terms-span">Información que nos proporcionas.</span> Esta es información sobre usted que nos proporciona al completar 
                        cualquier detalle en el sitio web o al comunicarse con nosotros por teléfono, correo electrónico o de otro modo. El personal de nuestro cliente también puede proporcionar 
                        información como su nombre, número de teléfono del contrato y dirección de correo electrónico como parte del uso de los servicios proporcionados por OneDoor y como parte 
                        de su empleo con nuestros clientes.</li>
                        <li className="terms-paragraph"><span className="terms-span">Información que recopilamos sobre usted.</span> Con respecto a cada una de sus visitas a nuestro sitio web, 
                        recopilaremos automáticamente la siguiente información:
                        <ul>
                            <li className="terms-paragraph">información técnica que puede incluir: la dirección de protocolo de Internet (IP) utilizada para conectar su computadora a Internet; 
                            tipo y versión del navegador; ajuste de zona horaria; tipos y versiones de complementos del navegador y el sistema operativo y la plataforma.</li>
                            <li className="terms-paragraph">información sobre su visita, incluidos los localizadores uniformes de recursos (URL), el flujo de clics hacia, a través y desde 
                            nuestro sitio web (incluida la fecha y la hora), los tiempos de respuesta de la página, los errores de descarga, la duración de las visitas a ciertas páginas, la 
                            información de interacción de la página (como desplazamientos, clics y desplazamientos del mouse), los métodos utilizados para navegar fuera de la página y 
                            cualquier nombre, dirección de correo electrónico o número de teléfono utilizado para contactarnos.</li>
                            <li className="terms-paragraph">Nombre y dirección de correo electrónico con respecto a poder contactarlo ya sea con respecto a responder una consulta o por 
                            razones más generales relacionadas con informarle sobre nuestros servicios e información general de marketing.</li>
                        </ul>
                        </li>
                    </ul>
                    <p className="terms-paragrah">La base legal para este procesamiento son nuestros intereses legítimos, a saber, monitorear y mejorar nuestro sitio web y permitirle comunicarse 
                    con nosotros y con nosotros para comunicarnos con usted.</p>
                    <ul>
                        <li className="terms-paragraph"><span className="terms-span">Personal de nuestros clientes:</span> como parte de su uso de los servicios proporcionados por OneDoor, podemos 
                        recopilar datos personales como su nombre, teléfono de contacto y dirección de correo electrónico, y dichos datos personales pueden compartirse con personas que visiten el sitio 
                        web de un cliente e interactúen con usted en el curso de su empleo a través de OneDoor. La base legal para procesar dichos datos personales será la ejecución de un contrato.</li>
                    </ul>
                    <h5 className="terms-title">Cookies</h5>
                    <p className="terms-paragrah">Nuestro sitio web utiliza cookies para distinguirlo de otros usuarios de nuestro sitio web. Esto nos ayuda a brindarle una buena experiencia cuando navega 
                    por nuestro sitio web y nos permite mejorarlo. Se almacenará una cookie en su computadora. Generalmente, las cookies funcionan asignando a su computadora un número único que no tiene 
                    significado fuera del sitio web. Las cookies no contienen ninguna información personal y las usamos solo para personalizar y mejorar su experiencia.</p>
                    <p className="terms-paragrah">Consulte nuestra Política de <a href="#">cookies</a> para obtener más información sobre cómo usamos las cookies.</p>
                    <h5 className="terms-title">Aplicaciones de Analítica</h5>
                    <p className="terms-paragrah">Usamos aplicaciones móviles de análisis para permitirnos comprender mejor la funcionalidad de OneDoor en su teléfono. Este software puede registrar 
                    información como la frecuencia con la que usa la aplicación, los eventos y las interacciones que ocurren dentro de la aplicación, el uso agregado y los datos de rendimiento.</p>
                    <p className="terms-paragrah">Además, en el caso de que OneDoor se bloquee en su dispositivo móvil, recibiremos información sobre el modelo de su dispositivo móvil y la versión del 
                    sistema operativo, lo que nos permite identificar y corregir errores y mejorar el rendimiento de OneDoor.</p>
                    <h5 className="terms-title">Usos de la información</h5>
                    <p className="terms-paragrah">Usamos la información que tenemos sobre usted de las siguientes maneras:</p>
                    <ul>
                        <li className="terms-paragraph"><span className="terms-span">Información que nos proporciona.</span> Usaremos esta información:
                        <ul>
                            <li className="terms-paragraph">para cumplir con nuestras obligaciones derivadas de cualquier contrato celebrado entre usted y nosotros y para proporcionarle la información, los productos y los servicios que nos solicite;</li>
                            <li className="terms-paragraph">para uso interno y para administrar el sitio web y para operaciones internas, incluida la resolución de problemas, análisis de datos, pruebas, investigación, fines estadísticos y de encuestas;</li>
                            <li className="terms-paragraph">para comunicarse con usted, incluso para notificarle sobre cambios en nuestro servicio;</li>
                            <li className="terms-paragraph">para garantizar que el contenido de nuestro sitio web se presente de la manera más eficaz para usted y su computadora.</li>
                            <li className="terms-paragraph">para ponernos en contacto con usted en relación con diversas oportunidades de marketing y ventas, (aunque en el momento en que lo autorice).</li>
                            <li className="terms-paragraph">en ejecución del contrato para proporcionar los servicios entre OneDoor y el cliente.</li>
                        </ul>
                        </li>
                    </ul>
                    <p className="terms-paragrah">La base legal para contactarlo con respecto a brindarle información sobre nuestros servicios, información general de marketing y oportunidades de ventas será el interés legítimo.</p>
                    <h5 className="terms-title">Divulgación de su información</h5>
                    <p className="terms-paragrah">Acepta que tenemos derecho a compartir su información personal con:</p>
                    <ul>
                        <li className="terms-paragraph">Terceros seleccionados, incluidos:
                            <ul>
                                <li className="terms-paragraph">socios comerciales, proveedores y subcontratistas para la ejecución de cualquier contrato que celebremos con ellos o con usted;</li>
                                <li className="terms-paragraph">proveedores de análisis y motores de búsqueda que nos ayudan a mejorar y optimizar el sitio web;</li>
                                <li className="terms-paragraph">agencias de referencia crediticia para evaluar su puntaje crediticio cuando esta sea una condición para que celebremos un contrato con usted.</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="terms-paragrah">La base legal para contactarlo con respecto a brindarle información sobre nuestros servicios, información general de marketing y oportunidades de ventas será el interés legítimo.</p>
                    <p className="terms-paragrah">Divulgaremos su información personal a terceros:</p>
                    <ul>
                        <li className="terms-paragraph">Si vendemos o compramos cualquier negocio o activo, en cuyo caso divulgaremos sus datos personales al posible vendedor o comprador de dicho negocio o activo.</li>
                        <li className="terms-paragraph">Si tenemos la obligación de divulgar o compartir sus datos personales para cumplir con cualquier obligación legal, o para hacer cumplir o aplicar nuestros Términos de uso.</li>
                    </ul>
                    <h5 className="terms-title">Conservación y eliminación de sus datos personales</h5>
                    <p className="terms-paragrah">Sus datos personales no se conservarán más tiempo del necesario, aunque no es posible que siempre especifiquemos por adelantado cuánto tiempo puede ser.</p>
                    <p className="terms-paragrah">Sin perjuicio de lo anterior, podemos conservar sus datos personales si es necesario para nuestro cumplimiento de determinadas obligaciones legales.</p>
                    <h5 className="terms-title">Tus derechos</h5>
                    <p className="terms-paragrah">Tiene derecho a solicitarnos que no procesemos sus datos personales con fines de marketing. Por lo general, le informaremos (antes de recopilar sus datos) si 
                    tenemos la intención de utilizar sus datos para tales fines o si tenemos la intención de divulgar su información a un tercero para tales fines. Puede ejercer su derecho a evitar dicho procesamiento marcando ciertas 
                    casillas en los formularios que utilizamos para recopilar sus datos. También puede ejercer el derecho en cualquier momento poniéndose en contacto con nosotros en hello@useonedoor.co</p>
                    <p className="terms-paragrah">Los otros derechos que tiene bajo la legislación de protección de datos incluyen: (a) el derecho de acceso; (b) el derecho de rectificación; (c) el derecho a borrar; (d) el derecho a restringir el procesamiento; 
                    (e) el derecho a la portabilidad de los datos; (f) el derecho a presentar una queja ante una autoridad competente; y (g) el derecho a retirar el consentimiento.</p>
                    <p className="terms-paragrah">Nuestro sitio web puede, de vez en cuando, contener enlaces hacia y desde el sitio web de nuestras redes de socios, anunciantes y afiliados. Si sigue un enlace a cualquiera de estos sitios web, tenga en cuenta 
                    que estos sitios web tienen sus propias políticas de privacidad y que no aceptamos ninguna responsabilidad por estas políticas. Consulte estas políticas antes de enviar datos personales a estos sitios web.</p>
                    <h5 className="terms-title">Acceso a la información</h5>
                    <p className="terms-paragrah">La ley le otorga el derecho a acceder a la información que se tiene sobre usted. Su derecho de acceso puede ejercerse de conformidad con la Ley.</p>
                    <h5 className="terms-title">Cambios en nuestra política de privacidad</h5>
                    <p className="terms-paragrah">Cualquier cambio que hagamos en nuestra política de privacidad en el futuro se publicará en esta página y, cuando corresponda, se le notificará por correo electrónico. Vuelva a consultar con frecuencia para ver 
                    actualizaciones o cambios en nuestra política de privacidad.</p>
                    <h5 className="terms-title">Contacto</h5>
                    <p className="terms-paragrah">Las preguntas, comentarios y solicitudes con respecto a esta política de privacidad son bienvenidos y deben dirigirse a hello@useonedoor.co</p>
                    <h5 className="terms-title">OneDoor, Junio 2021</h5>
                </div>
            </section>
        </>
    )
}

export default Privacy;