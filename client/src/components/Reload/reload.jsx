import React from "react";
import { useEffect } from "react";  
import { useDispatch } from "react-redux"; 
import { getCountries } from "../../redux/actions";



export default function ReLoad () {
    const dispatch = useDispatch()
   


    useEffect ((e) => {
        dispatch(getCountries())
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries())
    }

    return(
        <div>

            <button onClick = {e=> {handleClick(e)}} >
                Inicio
            </button>
        </div>
    )
}