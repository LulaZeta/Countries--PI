import React from "react";
import {Link} from "react-router-dom";
import './landingPage.css'


export default function LandingPage () {
    return (
        <div className="landing">
            <h1 className="lText">Bienvenid@s</h1>
            <Link to='/Home' >
                <button className="button">Ingresar</button>
            </Link>
            
        </div>
    )
}