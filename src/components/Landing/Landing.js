import React, {useRef, useState, useEffect, Fragment} from 'react';
import './Landing.css';

import { Link } from 'react-router-dom';

//import '../../App.css'


const Landing = () => {
    const  [btn, setBtn] = useState(false);
    console.log(btn)
    const refWolverine = useRef(null);

    // useEffect(() => {
    //     refWolverine.current.classList.add('startingImg');
    //     setTimeout(() => {
    //         refWolverine.current.classList.remove('startingImg');
    //         setBtn(true)
    //     });
    // }, []);


    // Gestions des classes sur les griffes de Wolverin
    const selfLeftImg = () => {
        refWolverine.current.classList.add('leftImg');
    }
    const selfRightImg = () => {
        refWolverine.current.classList.add('rightImg');
    }
    const clearImg = () => {
        if (refWolverine.current.classList.contains('leftImg')) {
            refWolverine.current.classList.remove('leftImg');
        }else if (refWolverine.current.classList.contains('rightImg')) {
            refWolverine.current.classList.remove('rightImg');
        }
    }
    const displyBtn = btn && (

        <Fragment>
            <div onMouseOver={selfLeftImg} onMouseOut={clearImg} className="leftBox">
                <Link className="btn-welcome" to="signup">Inscription</Link>
            </div>
            <div onMouseOver={selfRightImg} onMouseOut={clearImg} className="rightBox">
                <Link className="btn-welcome" to="login">Connexion</Link>
            </div> 
        </Fragment>
    )
    return (
        // il faut faire un ref={refWolverine}  sur main
        <Fragment>
            <div className="welcomePage">
                <div className="imageLeftCin"></div>
                <div className="imageRightCin"></div>
                {/* {displyBtn} */}
            </div>
            <div className="welcomePage">
                <div className="welcomePageTwo"> <p className="welcomePageText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an<br></br> unknown printer took a galley of type and scrambled it to make a type specimen book.</p> </div>
                {/* {displyBtn} */}
            </div>
        </Fragment>
        
        
    )
}

export default Landing;
