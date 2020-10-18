import React, { useState, useEffect, Fragment, useContext} from 'react';
import { FirebaseContext } from './../Firebase/Index';
import LogOut from './../LogOut/LogOut';
import Quiz from './../Quiz/Quiz';
import './Welcom.css';

const Welcom = props => {

    const firebasePro = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        let listener = firebasePro.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/')
        })

        if (!!userSession) {
            firebasePro.user(userSession.uid)
            .get()
            .then( doc => {
                if (doc && doc.exists) {
                    const myData = doc.data();
                    setUserData(myData)
                }
            })
            .catch( error => {
                console.log(error )
            })
        }
        
        return () => {
            listener();
        };
    }, [userSession])

        return userSession === null ? (
            <Fragment>
                <div className="loader"></div>
                <p className="loaderText">Loading ... </p>
            </Fragment>
            ) : (
                <div className="quiz-bg">
                    <div className="container">
                        <LogOut />
                        <Quiz userData={userData}/>
                        
                    </div>
                </div>
        );
}

export default Welcom;
