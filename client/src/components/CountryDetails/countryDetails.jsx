import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router";


export default function CountryDetails() {
    const [countries, setCountries] = useState(null)                //estado local
    let {id} = useParams()
    
    useEffect(()=>{
        axios.get('http://localhost:3001/countries/' + id)
        .then((response) => {
            setCountries(response.data)
        })
        return () => {
            setCountries(null)    //Se limpia el componente, si se trabaja con redux
        }
    },[id])
    return <div>
        {
            countries ?
            <>
        
        <h4>{countries.name}</h4>
        <img src = {countries.image} alt="imagen not found" width="320px" height="200px" />
        
        </> :
        <div>loading ...</div>    
        }   
    </div>
}