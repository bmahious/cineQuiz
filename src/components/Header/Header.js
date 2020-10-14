import React from 'react'
import '../../App.css'

function Header() {
    return (
        <header>
            <div className="banner-container">
                <h1> <a> Cinéma Quiz</a> </h1>
                <div className="btn-container">
                    <div className="leftBox">
                            <button className="btn-welcomeOne">Inscription</button>
                        </div>
                        <div className="rightBox">
                            <button className="btn-welcomeTwo">Connexion</button>
                        </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
