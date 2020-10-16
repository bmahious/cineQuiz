import React from 'react';
import './ErrorPage.css';
import batman from '../../images/batman.png';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="quiz-bg">
            <div className="container">
                <h2 className="errorTitle"> Oups ! cette page n'existe pas </h2>
                <img src={batman} alt="error page" className="errorImg" /> 
            </div>
        </div>
    )
}

export default ErrorPage
