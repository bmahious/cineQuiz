import React, {useState, useContext} from 'react';
import { FirebaseContext } from './../Firebase/Index';
import { Link } from 'react-router-dom';
import './SigUp.css';


const SigUp = (props) => {
        console.log(props)
    // Here we make a call to useContext to access to the provider 
    const firebaseContextProvid = useContext(FirebaseContext);

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [LoginData, setLoginData] = useState(data);
    const [error, setError] = useState('');

    const handleChange = e => {
        setLoginData({...LoginData, [e.target.id] : e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password} = LoginData;
        firebaseContextProvid.SignUpUser(email, password)
        //HERE WE PUT BACK THE EMPTY STRING BY PASSING 'setLoginData' TO 'data', AFTER THE USER SIGNUP
        .then( user => {
            setLoginData({...data});
            props.history.push('/welcom');
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
    }


    const { pseudo, email, password, confirmPassword} = LoginData;

    const btn = pseudo === '' || email === '' || password ==='' ||  password !== confirmPassword
    ? <button disabled>Inscription </button> : <button>Inscription </button>

    // HUNDLE ERRORS 
    const ErrorMsg = error !== '' && <span> {error.message} </span>
    return (
        <div className="SignUpLoginBox">
            <div className="slContainer ">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                        <div className="formContent">
                            {ErrorMsg}
                        <h2> Inscription </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="inputBox">
                                    <input onChange={handleChange} value={pseudo} type="text" id="pseudo" required />
                                    <label htmlFor="pseudo"> Label </label>
                                </div>
                                <div className="inputBox">
                                    <input onChange={handleChange} value={email} type="email" id="email" required />
                                    <label htmlFor="email"> Email </label>
                                </div>
                                <div className="inputBox">
                                    <input onChange={handleChange} value={password} type="password" id="password" required />
                                    <label htmlFor="password"> Mot de passe </label>
                                </div>
                                <div className="inputBox">
                                    <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" required />
                                    <label htmlFor="password"> Confirmer le mot de passe </label>
                                </div>
                                {btn}
                            </form>
                            <div className="linkContainer">
                                <Link className="simpleLink" to="/login"> Déja inscrit ? Connectez vous</Link>
                            </div>
                        </div>
                    </div>
            </div> 
        </div>
    )
}

export default SigUp;