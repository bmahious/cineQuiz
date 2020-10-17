import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from './../Firebase/Index';
import './Login.css';

const Login = (props) => {

    const firebasProvider = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    const handleErrorMsg = error !== '' && <span> {error.message} </span>
    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true);
        } else if (btn) {
            setBtn(false)
        }
    },[password, email, btn]);

    const handleSubmit = e => {
        e.preventDefault();
        firebasProvider.LoginUser(email, password)
        .then(user => {
            console.log(user);
            setEmail('');
            setPassword('');
            props.history.push('/welcom')
        })
        .catch(error => {
            setError(error)
            setEmail('');
            setPassword('');
        })
    }

    const hundleButton = btn ? <button> Connexion </button> : <button disabled>Connexion</button> 
    

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                {/* <div className="formBoxLeftLogin"></div> */}
                    <div className="formBoxRight">
                            <div className="formContent">
                                {handleErrorMsg}
                            <h2> Connexion </h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="inputBox">
                                        <input onChange={handleEmail} value={email} type="email" id="email" required />
                                        <label htmlFor="email"> Email </label>
                                    </div>
                                    <div className="inputBox">
                                        <input onChange={handlePassword} value={password} type="password" id="password" required />
                                        <label htmlFor="password"> Mot de passe </label>
                                    </div>
                                    { hundleButton }
                                </form>
                                <div className="linkContainer">
                                    <Link className="simpleLink" to="/signup"> Nouveau sur Ciné Quiz ! Inscrivez-vous maintenant</Link>
                                    <br />
                                    <Link className="simpleLink" to="/forgetpassword"> Mot de passe oublié ? </Link>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default Login;
