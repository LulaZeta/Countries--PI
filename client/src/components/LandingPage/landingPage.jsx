import React from "react";
import {Link} from "react-router-dom";



export default function LandingPage () {
    return (
        <div className="landing">
            <h1>Bienvenid@</h1>
            <Link to='/Home' >
                <button>Ingresar</button>
            </Link>
            
        </div>
    )
}