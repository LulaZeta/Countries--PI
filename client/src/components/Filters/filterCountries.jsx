import React from "react";

import { useDispatch, useSelector } from "react-redux"; 

import { filterCountries  } from "../../redux/actions";



export default function FilterCountries() {
    const dispatch = useDispatch()
    const pais = useSelector((state)=> state.filteredCountries)
   
    
 

    function handleFilterCountries(e){
        e.preventDefault();
        dispatch(filterCountries( e.target.value ))
    }

    return(
        <div>
            <select name="select" onChange={handleFilterCountries}>
               {pais.map((el)=> 
                <option value ={el.name} >{el.name}</option>
                ) }
            </select>
        </div>
    )
}