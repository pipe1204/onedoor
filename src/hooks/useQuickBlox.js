import { useCallback, useRef, useState } from 'react';
import config from '../QBconfig'
import QB from 'quickblox/quickblox.min';
import QBconfig from "../QBconfig";
const CONFIG = {
    debug: true,
    webrtc: {
        answerTimeInterval: 45,
        dialingTimeInterval: 5,
        autoReject: true,
        incomingLimit: 1,
    }
};

const useQuickBlox = () => {
    const loading = useRef(false);
    const [mySession, setMySession] = useState();
    const [callStatus, setCallStatus] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [noAnswer, setNoAnswer] = useState(false);
    const [currentUser, setCurrentUser] = useState(false);

    const initQuickBlox = useCallback(
        async () => {
            loading.current = true;
            const response = await QB.init(config.appId, config.authKey, config.authSecret, config.accountKey, CONFIG);
            console.log(response);
            loading.current = false;
        },
        [loading]
    );

    const createUserSession = useCallback(
        async (email, fullName, branch, externalId) => {
            loading.current = true;
            let params = {
                login: email,
                password: "OneDoorCompany",
                full_name: fullName,
                tag_list: branch || null,
                externalId: externalId
            };

            const user = await new Promise(function (resolve, reject) {
                QB.createSession(function (csErr, csRes) {
                    if (csErr) {
                        reject(csErr);
                    } else {
                        /** In first trying to login */
                        QB.login(params, function (loginErr, loginUser) {
                            if (loginErr) {
                                /** Login failed, trying to create account */
                                QB.users.create({
                                    'login': params.login,
                                    'password': params.password,
                                    'full_name': params.full_name,
                                    'email': params.login
                                    // 'custom_data': params.tag_list
                                }, function (createErr, createUser) {
                                    if (createErr) {
                                        console.log('[create user] Error:', createErr);
                                        reject(createErr);
                                    } else {
                                        QB.login(params, function (reloginErr, reloginUser) {
                                            if (reloginErr) {
                                                console.log('[relogin user] Error:', reloginErr);
                                            } else {
                                                resolve(reloginUser);
                                            }
                                        });
                                    }
                                });
                            } else {
                                /** Update info */
                                if (loginUser.full_name !== params.full_name) {
                                    QB.users.update(loginUser.id, {
                                        'full_name': params.full_name,
                                        // 'custom_data': params.tag_list
                                    }, function (updateError, updateUser) {
                                        if (updateError) {
                                            console.log('APP [update user] Error:', updateError);
                                            reject(updateError);
                                        } else {
                                            resolve(updateUser);
                                        }
                                    });
                                } else {
                                    resolve(loginUser);
                                }
                            }
                        });
                    }
                });
            });
            loading.current = false;
            setCurrentUser(user)
            return user;
        },
        [loading]
    );

    const getRepresentativesUsers = useCallback(
        async (users) => {
            loading.current = true;

            let representatives = [];
            representatives = await Promise.all(
                users.map(async (user) => {
                    let searchParams = { email: user.email };
                    debugger
                    return new Promise(function (resolve, reject) {
                        QB.users.get(searchParams, function (error, result) {
                            debugger
                            if (result) {
                                resolve(result);
                            }
                        });
                    });
                })
            );

            loading.current = false;
            return representatives;
        },
        [loading]
    );

    const connectChatServer = useCallback(
        async (user) => {
            loading.current = true;
            let userCredentials = {
                jid: QB.chat.helpers.getUserJid(user?.id, QBconfig.appId),
                password: "OneDoorCompany"
            };
            QB.chat.connect(userCredentials, function (error, contactList) {
                if (error) {
                    console.log('ERROR:::', error);
                } else {
                    localStorage.setItem('isAuth', true)
                }
            });
            loading.current = false;
        },
        [loading]
    );

    const makeVideoCall = useCallback(
        async (representativesFromQB, callType) => {
            loading.current = true;
            let calleesIds = [representativesFromQB.id]; // Users' ids, for testing purposes we use just one [0]
            // let calleesIds = [129779412]; // Users' ids, for testing purposes we use just one [0]
            let sessionType;
            let mediaParams;
            if (callType === 'VIDEO') {
                sessionType = QB.webrtc.CallType.VIDEO;
                mediaParams = {
                    audio: true,
                    video: true,
                    options: {
                        muted: true,
                        mirror: true,
                    },
                    elemId: "localVideo"
                };
            } else {
                sessionType = QB.webrtc.CallType.AUDIO;
                mediaParams = {
                    audio: true,
                    video: false,
                    options: {
                        muted: true,
                        mirror: true,
                    },
                    elemId: "localVideo",
                };
            }
            let additionalOptions = {};

            let session = QB.webrtc.createNewSession(calleesIds, sessionType, null, additionalOptions);
            setMySession(session);

            session.getUserMedia(mediaParams, function (error, stream) {
                if (error) {
                    console.log(error);
                } else {
                    //run call function here
                    let extension = {
                        "name": currentUser.full_name,
                        "email": currentUser.email
                    };
                    session.call(extension, function (error) {
                        sendPush(calleesIds)
                        calleesIds.forEach(async function (userID, i, arr) {

                            let peerState = session.connectionStateForUser(userID);
                            console.log('peerState', peerState);


                            if (peerState === QB.webrtc.PeerConnectionState.CLOSED) {
                                console.log('======= CONNECTION CLOSED')
                                // Turn off
                                //app.helpers.toggleRemoteVideoView(userID, 'clear');
                            }
                        });
                    });
                }
            });

            loading.current = false;
        },
        [loading]
    );

    const sendPush = useCallback(
        async (users) => {
            var payload = JSON.stringify({
                message: "Incoming Call",
                ios_voip: "1",
                VOIPCall: "1"
            });
            var pushParameters = {
                notification_type: "push",
                user: { ids: users }, // recipients.
                environment: "development", // environment, can be 'production'.
                message: QB.pushnotifications.base64Encode(payload)
            };
            console.log("============= Push Notification Payload", pushParameters);
            QB.pushnotifications.events.create(pushParameters, function (error, result) {
                if (error) {
                    console.log("============= Push Notification Error", error);
                } else {
                    // success
                    console.log("============= Push Notification is sent.");
                }
            });
        }
    )

    const listenCalls = useCallback(
        async () => {
            loading.current = true;
            let mediaParams = {
                audio: true,
                video: true,
                options: {
                    muted: true,
                    mirror: true,
                },
                elemId: "localVideo",
            };
            window.addEventListener('onCallListener', QB.webrtc.onCallListener = function (session, extension) {
                console.log('session:::', session);
                if (session.state !== QB.webrtc.SessionConnectionState.CLOSED) {
                    console.log('Receiving a call');
                }
                setReceivingCall(session);

                // if you are going to take a call
                session.getUserMedia(mediaParams, function (error, stream) {
                    if (error) {
                        console.log(error)
                    } else {
                        //run accept function here
                        console.log(stream);
                        // session.attachMediaStream("mainVideo", session.peerConnections[userId].remoteStream);
                    }
                });

            })

            loading.current = false;
        },
        [loading]
    );

    const acceptCall = useCallback(
        async (session) => {
            loading.current = true;
            console.log(session);
            let extension = {};
            session.accept(extension);

            loading.current = false;
        },
        [loading]
    );

    const endCall = useCallback(
        async (session) => {
            loading.current = true;
            console.log(session);
            let extension = {};
            session.stop(extension);

            loading.current = false;
        },
        [loading]
    );

    const acceptListener = useCallback(
        async () => {
            loading.current = true;
            window.addEventListener('onAcceptListener', QB.webrtc.onAcceptCallListener = function (session, userId, extension) {
                // Call was accepted
                console.log('session:::', session.peerConnections[userId]);
                console.log('extension', extension);
            });

            loading.current = false;
        },
        [loading]
    );

    const rejectListener = useCallback(
        async (callback) => {
            loading.current = true;
            window.addEventListener('onRejectListener', QB.webrtc.onRejectCallListener = function (session, userId, extension) {
                // Call was accepted
                if (callback) {
                    callback()
                }
                console.log('session:::', session.peerConnections[userId]);
                console.log('extension', extension);
            });

            loading.current = false;
        },
        [loading]
    );

    const remoteListener = useCallback(
        async () => {
            loading.current = true;
            window.addEventListener('onRemoteListener', QB.webrtc.onRemoteStreamListener = function (session, userID, remoteStream) {
                // Get the other person's media
                session.attachMediaStream("mainVideo", remoteStream);
            });
            loading.current = false;
        },
        [loading]
    );

    const stopCallListener = useCallback(
        async (callback) => {
            loading.current = true;
            window.addEventListener('onStopCallListener', QB.webrtc.onStopCallListener = function (session, userId, extension) {
                console.log('onStopCallListener');
                if (callback) {
                    callback()
                }
            });
            loading.current = false;
        },
        [loading]
    );

    const userNotAnswerListener = useCallback(
        async (callback) => {
            loading.current = true;
            window.addEventListener('onUserNotAnswerListener', QB.webrtc.onUserNotAnswerListener = async function (session, userId) {
                console.log("======== onUserNotAnswerListener")
                setNoAnswer(true);
                callback()
            });
            loading.current = false;
        },
        [loading]
    );

    const sessionConnectionStateChangedListener = useCallback(
        async () => {
            loading.current = true;
            window.addEventListener('onSessionConnectionStateChangedListener', QB.webrtc.onSessionConnectionStateChangedListener = function (session, userId, connectionState) {
                console.log('onSessionConnectionStateChangedListener:::', connectionState);
                setCallStatus(connectionState);
                // QB.webrtc.SessionConnectionState.CONNECTING
                // QB.webrtc.SessionConnectionState.CONNECTED
                // QB.webrtc.SessionConnectionState.CLOSED
                // QB.webrtc.SessionConnectionState.FAILED
                // QB.webrtc.SessionConnectionState.COMPLETED

            });
            loading.current = false;
        },
        [loading]
    );

    const callStatsReport = useCallback(
        async () => {
            loading.current = true;
            window.addEventListener('onCallStatsReport', QB.webrtc.onCallStatsReport = function (session, userId, stats, error) {
                console.log('onCallStatsReport:::', stats);

            });
            loading.current = false;
        },
        [loading]
    );


    return {
        initQuickBlox,
        createUserSession,
        getRepresentativesUsers,
        connectChatServer,
        makeVideoCall,
        listenCalls,
        receivingCall,
        acceptCall,
        endCall,
        acceptListener,
        remoteListener,
        stopCallListener,
        userNotAnswerListener,
        sessionConnectionStateChangedListener,
        callStatsReport,
        rejectListener,
        callStatus,
        mySession,
        noAnswer
    };
};

export default useQuickBlox;
