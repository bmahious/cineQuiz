import React, { useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from './../Firebase/Index';
import './ForgetPassword.css';

const ForgetPassword = props => {

    const firebasePro = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = e => { 
        e.preventDefault();
        firebasePro.passwordReset(email)
        .then(() => {
            setError(null);
            setSuccess(`Un lien de récupération vient d être envoyé à ${email}`);
            setEmail('');
            setTimeout(() => {
                props.history.push('/login')
            },5000)
           

        })
        .catch(error => {
            setError(error);
            setEmail('');
        })
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const disabled = email === '';
    

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftForget"></div>
                    <div className="formBoxRight">
                            <div className="formContent">
                                { success && <span className="spanMsgEmail"> {success} </span>}
                                { error && <span className=""> {error.message} </span>}
                            <h2> Mot de passe oublié ? </h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="inputBox">
                                        <input onChange={handleEmail} value={email} type="email" id="email" required />
                                        <label htmlFor="email"> Email </label>
                                    </div>
                                    <button disabled={disabled}> Récupérer </button>
                                </form>
                                <div className="linkContainer">
                                    <Link className="simpleLink" to="/login"> Déja inscrit ? connectez-vous </Link>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default ForgetPassword;
