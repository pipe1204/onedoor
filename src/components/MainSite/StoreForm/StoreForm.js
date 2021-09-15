import React, { useEffect, useState } from "react";
import "./StoreForm.css";
import { get, useForm } from 'react-hook-form';
import useCustomers from "../../../hooks/useCustomers";
import { Button, Form } from "react-bootstrap";
import useQuickBlox from "../../../hooks/useQuickBlox";
import CallButton from "./CallButton"
import { Link } from "react-router-dom";


const StoreForm = ({ match, history }) => {
    const storedLink = get(match, 'params.storedLink', null);
    const {
        initQuickBlox,
        createUserSession,
        getRepresentativesUsers,
        connectChatServer,
        makeVideoCall,
        acceptListener,
        rejectListener,
        remoteListener,
        stopCallListener,
        userNotAnswerListener,
        sessionConnectionStateChangedListener,
        callStatsReport,
        callStatus,
        endCall,
        mySession,
        noAnswer
    } = useQuickBlox();
    const [defaultOption, setDefaultOption] = useState(undefined);
    const [branch, setBranch] = useState(undefined);
    const [callEnded, setCallEnded] = useState(false);
    const [callstarted, setCallstarted] = useState(false);
    const [callType, setCallType] = useState();
    const [emailBranch, setEmailBranch] = useState();
    const [index, setIndex] = useState(0)
    const [QBUsers, setQBUsers] = useState([])
    const { getCompanyByURL, company, createCustomer, getRepresentativesByBranch, getRepresentatives } = useCustomers();
    const { register, handleSubmit, getValues } = useForm({
        mode: 'onChange',
        defaultValues: {
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            branch: undefined
        },
    });

    const [question, setQuestion] = useState(false);

    useEffect(() => {
        initQuickBlox();
        getCompanyByURL(storedLink);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(async () => {
        console.log("INDEXXXXXXXXX", index)
        if (callstarted) {
            if (index < QBUsers.length) {
                await makeVideoCall(QBUsers[index], callType);
            } else {
                finishCall()
            }
        }
    }, [index]);

    const finishCall = () => {
        endCall(mySession);
        setCallEnded(true);
    }

    useEffect(() => {
        if (branch) {
            if (company.branchs?.length === 1) {
                // getRepresentativesByBranch(branch);
                setEmailBranch(branch.email);
            } else {
                // getRepresentativesByBranch(branch);
                const branchRetrieved = company.branchs.find((value) => value._id === branch);
                setEmailBranch(branchRetrieved.email);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [branch]);

    const onChange = (event) => {
        switch (event.target.name) {
            case 'branch':
                setBranch(event.target.value);
                break;
            default:
                break;
        }
    }

    const onSubmit = async (data) => {
        await createCustomer({ name: `${data.firstName} ${data.lastName}`, email: data.email, type: "CUSTOMER" });
        const currentUser = await createUserSession(data.email, `${data.firstName} ${data.lastName}`);
        const reps = await getRepresentativesByBranch(branch)
        // const reps = getRepresentatives()
        const representativesFromQB = await getRepresentativesUsers(reps);
        console.log("=========== reps", representativesFromQB)
        setQBUsers(representativesFromQB)
        await connectChatServer(currentUser);

        // Block of listeners
        await stopCallListener(() => {
            // finishCall()
            setCallEnded(true);
        });
        await userNotAnswerListener(async () => {
            await setIndex(index + 1)
        });
        await sessionConnectionStateChangedListener();
        await callStatsReport();
        await remoteListener();

        // Video call
        if (representativesFromQB.length > 0) {
            setCallstarted(true)
            await makeVideoCall(representativesFromQB[index], callType);
        } else {
            alert("No representative is available at the moment.")
            return
        }
        await acceptListener();
        await rejectListener(async () => {
            await setIndex(index + 1)
        });
    }
    const onError = (errors, e) => console.log(errors, e);

    const showStatusCall = () => {
        if (mySession && noAnswer) {
            return <h3>Su llamada no fue contestada.</h3>
        }
        if (mySession && !callStatus) {
            return <h3>Llamando...</h3>
        }
        if (mySession && callStatus === 1) {
            return <h3>Conectado.</h3>
        }
    }

    useEffect(() => {
        if (company) {
            if (company.branchs?.length === 1) {
                setDefaultOption(company.branchs[0]);
                setBranch(company.branchs[0]._id);
            } else {
                if (company?.branchs) {
                    setDefaultOption(company?.branchs[0]);
                    setBranch(company?.branchs[0]._id)
                }
            }
        }
    }, [company]);

    if (callEnded) {
        return (
            <div className="container-form">
                <h1>Gracias por llamar</h1>
            </div>
        )
    }

    const handleQuestion = () => {
        setQuestion(true)
    }

    const closeQuestion = () => {
        setQuestion(false)
    }

    return (
        <div className="container-form">
            <div className="form-div">
                {company && (
                    <Form md="6" onSubmit={handleSubmit(onSubmit, onError)}>
                        <h1 className="company-name">{company.name}</h1>
                        <div className="desc-form">
                            <p className="desc-paragraph">Por favor llena el siguiente formulario</p>
                        </div>
                        <div className="input-group input-container">
                            <input type="text" aria-label="First name" placeholder="Nombre" {...register('firstName', { required: true })} onChange={onChange} className="form-input" required />
                        </div>
                        <div className="input-group input-container">
                            <input type="text" aria-label="Last name" placeholder="Apellido" {...register('lastName', { required: true })} className="form-input" />
                        </div>
                        <div className="input-group mb-3 input-container">
                            <input type="text" className="form-input" placeholder="Correo Electrónico" {...register('email', { required: true })} aria-label="Email"
                                aria-describedby="basic-addon1" required />
                        </div>
                        <div className="input-group input-container">
                            <label for="sucursal" className="sucursal-label">Escoje sucursal</label>
                        </div>
                        <div className="input-group input-container">
                            <select {...register('branch')} className="browser-default mdb-select selector-sucursal" defaultValue={defaultOption} onChange={onChange}>
                                <option value="DEFAULT" disabled>Sucursal</option>
                                {company.branchs?.filter((branch, index) => branch.isActive)?.map((branch, index) => <option key={index} value={branch._id}>{branch.name}</option>
                                )}
                            </select>
                        </div>

                        <div className="div-call-button">
                            <CallButton
                                name="Pregunta"
                                image="❔"
                                onClick={handleQuestion}
                            />
                            <CallButton
                                name="Video"
                                image="📹"
                                type="submit"
                                disabled={mySession}
                                onClick={() => setCallType('VIDEO')}
                            />
                            <CallButton
                                name="Voz"
                                image="📞"
                                type="submit"
                                disabled={mySession}
                                onClick={() => setCallType('AUDIO')}
                            />
                            <CallButton
                                name="Correo"
                                image="📨"
                                email={emailBranch}
                            />
                        </div>
                    </Form>
                )}
            </div>
            <div>
                {
                    question && (
                        <div className="questionDiv">
                            <label className="questionLabel">Escribe tu pregunta y te respondemos con un corto video</label>
                            <input type="text" placeholder="ej. ¿Tienen sofás con cojineria de cuero?" className="questionInput" />
                            <button className="sentQuestion">Enviar</button>
                            <button className="closeQuestion" onClick={closeQuestion}>Cerrar</button>
                        </div>
                    )
                }
            </div>
            {mySession && (
                <>
                    <div className="input-group input-container">
                        {showStatusCall()}
                    </div>
                    <div className="container-video">
                        <div className="qb-video">
                            <video id="localVideo" className="qb-video_source" autoPlay playsInline></video>
                        </div>
                        <div className="qb-video">
                            <video id="mainVideo" className="frames__main_v qb-video_source" autoPlay playsInline></video>
                        </div>
                    </div>
                    <div className="input-group input-container">
                        <Button
                            variant="danger"
                            className="hangout-button"
                            onClick={() => finishCall()}
                        >
                            Terminar llamada
                        </Button>
                    </div>
                </>
            )}
        </div>
    )
};

export default StoreForm;
