import React, {useState, useEffect, useContext} from 'react';
import { FirebaseContext } from './../Firebase/Index';
import './LogOut.css';

const LogOut = props => {

    const FirebaseProv = useContext(FirebaseContext);
    
    const [checked, setChecked] = useState(false); 

    const handleChange = event => {
        setChecked(event.target.checked);
    } 

    useEffect(() => {
        if (checked) {
            FirebaseProv.SignOutUser();
        }
    }, [checked, FirebaseProv])

    return (
        <div>
            <div className="logoutContainer">
                <label className="switch">
                    <input 
                       onChange={handleChange}
                       type="checkbox"
                       checked={checked}
                    />
                    <span className="slider round"> </span>
                </label>
            </div>
        </div>
    )
}

export default LogOut;
