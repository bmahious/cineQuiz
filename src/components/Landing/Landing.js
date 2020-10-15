import React, {useRef, useState, useEffect, Fragment} from 'react';

import { Link } from 'react-router-dom';

//import '../../App.css'


const Landing = () => {
    const  [btn, setBtn] = useState(false);
    console.log(btn)
    const refWolverine = useRef(null);

    useEffect(() => {
        refWolverine.current.classList.add('startingImg');
        setTimeout(() => {
            refWolverine.current.classList.remove('startingImg');
            setBtn(true)
        });
    }, []);

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
        <main ref={refWolverine} className="welcomePage">
            {displyBtn}
        </main>
    )
}

export default Landing;
