import React, {useEffect} from "react";
import "./CalleeTest.css";
import {useForm} from 'react-hook-form';
import useCustomers from "../../../hooks/useCustomers";
import {Button, Form} from "react-bootstrap";
import useQuickBlox from "../../../hooks/useQuickBlox";


const CalleeTest = () => {
    const {initQuickBlox, createUserSession, connectChatServer, listenCalls, receivingCall, acceptCall, remoteListener} = useQuickBlox();
    const {company} = useCustomers();
    const { register, handleSubmit } = useForm({
        mode: 'onChange',
        defaultValues: {
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            branch: undefined
        },
    });
    //const branch_number = "60c70297b30360a57334a818";

    useEffect(() => {
        initQuickBlox();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = async (data) => {
        const currentRepresentative =  await createUserSession(data.email, `${data.firstName} ${data.lastName}`);
        await connectChatServer(currentRepresentative);
        await listenCalls();
        await remoteListener();
    }
    const onError = (errors, e) => console.log(errors, e);

    return(
        <div className="container-form">
            <div className="modal fade" id="income_call" tabIndex="-1" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Call received</h4>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-default j-decline">Decline</button>
                            <button type="button" className="btn btn-primary j-accept">Accept</button>
                        </div>
                    </div>
                </div>
            </div>
            {(
                <Form md="6" onSubmit={handleSubmit(onSubmit, onError)}>
                    <h1 className="company-name">{company.name}</h1>
                    <div className="desc-form">
                        <p className="desc-paragraph">Por favor llena el siguiente formulario para poder brindarte un mejor servicio.</p>
                    </div>
                    <div className="input-group input-container">
                        <input type="text" aria-label="First name" placeholder="Nombre" {...register('firstName', { required: true })} className="form-input"/>
                    </div>
                    <div className="input-group input-container">
                        <input type="text" aria-label="Last name" placeholder="Apellido" {...register('lastName', { required: true })} className="form-input"/>
                    </div>
                    <div className="input-group mb-3 input-container">
                        <input type="text" className="form-input" placeholder="Correo Electrónico" {...register('email', { required: true })} aria-label="Email"
                               aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group input-container">
                        <Button
                            variant="primary"
                            type="submit"
                            className="videocall-button"
                        >
                            Llamar Tienda
                        </Button>
                    </div>
                </Form>
            )}
            {receivingCall && (
                <div className="input-group input-container">
                    <Button
                        variant="primary"
                        className="videocall-button"
                        onClick={() => acceptCall(receivingCall)}
                    >
                        Contestar
                    </Button>
                </div>
            )}
            <div className="container-video">
                <div className="qb-video">
                    <video id="localVideo" className="qb-video_source" autoPlay playsInline></video>
                </div>
                <div className="qb-video">
                    <video id="mainVideo" className="frames__main_v qb-video_source" autoPlay playsInline></video>
                </div>
            </div>
        </div>
    )
}

export default CalleeTest;
