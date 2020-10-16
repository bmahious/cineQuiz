import React, {Fragment} from 'react';
import '../../App.css';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header>
            <div className="banner-container">
                <h1 className="headerTitle"> <Link className="headerTitle" to="/">Cinéma-quiz</Link> </h1>
                <div className="frag">
                    <div className="leftBox">
                        <Link className="btn-welcome" to="signup">S'inscrire</Link>
                    </div>
                    <div className="rightBox">
                        <Link className="btn-welcome" to="login">Se Connecter</Link>
                    </div> 
                </div>
            </div>
            
        </header>
    )
}

export default Header;
