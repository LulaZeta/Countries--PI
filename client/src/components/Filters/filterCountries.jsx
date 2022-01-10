import React from "react";

import { useDispatch } from "react-redux"; 

import { filterCountries  } from "../../redux/actions";



export default function FilterCountries() {
    const dispatch = useDispatch()
 
    
 

    function handleFilterCountries(e){
        e.preventDefault();
        dispatch(filterCountries( e.target.value ))
    }

    return(
        <div>
            <select name="select" onChange={handleFilterCountries}>
                <option value ={map} >{}</option>
                <option value= 'South America'>América del Sur</option>
                <option value= 'North America'>América del Norte</option>
                <option value= 'Europe'>Europa</option>
                <option value= 'Africa'>Africa</option>
                <option value= 'Asia'>Asia</option>
                <option value= 'Oceania'>Oceanía</option>
                <option value= 'Antarctica'>Antártida</option>
            </select> 
           
        </div>
    )
}