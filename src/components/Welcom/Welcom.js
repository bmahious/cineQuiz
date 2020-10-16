import React, { useState, useEffect, Fragment, useContext} from 'react';
import { FirebaseContext } from './../Firebase/Index';
import LogOut from './../LogOut/LogOut';
import Quiz from './../Quiz/Quiz';
import './Welcom.css';

const Welcom = props => {

    const firebasePro = useContext(FirebaseContext);
    const [userSession, setUserSession] = useState(null);

    useEffect(() => {
        let listener = firebasePro.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/')
        });
        return () => {
            listener();
        }
    }, [])

        return userSession === null ? (
            <Fragment>
                <div className="loader"></div>
                <p className="loaderText">Loading ... </p>
            </Fragment>
            ) : (
            <div className="quiz-bg">
                    <div className="container">
                        <LogOut />
                        <Quiz />
                    </div>
                </div>
        );
}

export default Welcom;
