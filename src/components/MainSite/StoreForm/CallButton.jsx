import React from "react"
import "./callbutton.css"

function CallButton(props) {
    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

        return <a href={`mailto:${email}${params}`} className="email-button">{children}</a>;
    };
    return (
        <div className="div-button">
            {props.name === 'Correo' ? (
                <Mailto email={props?.email} subject="Hola! Quiero hablar" body="">
                    <h3 className="call-text">{props.name}</h3>
                    <button onClick={props.onClick} className="button-form">{props.image}</button>
                </Mailto>
            ):(
                <>
                    <h3 className="call-text">{props.name}</h3>
                    <button onClick={props.onClick} className="button-form">{props.image}</button>
                </>
            )}
        </div>
    )
}

export default CallButton
