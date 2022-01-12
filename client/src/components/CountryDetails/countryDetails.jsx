import React from "react";
import { useEffect } from "react";
import { countryDetails } from "../../redux/actions"; 
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";



export default function CountryDetails(props) {
    console.log(props) 
          
    const {id} = useParams();
    const dispatch = useDispatch()
    console.log(id)
    
    useEffect(()=>{
        dispatch(countryDetails(id))
    },[dispatch])

    const myCountry = useSelector((state)=>state.detail)
    return <div>
        {
            myCountry ?
            <div>

        <h1>{ myCountry.name}</h1>
        <img src = { myCountry.image} alt="imagen not found" width="320px" height="200px" />
        <h2>Continente: {myCountry.continents}</h2>
        <h2>Capital: {myCountry.capital}</h2>
        <h3>Código de País: {myCountry.id}</h3>
        <p>Subregión: {myCountry.subregion}</p>
        <p>Área: {myCountry.area} Km²</p>
        <p>Población: {myCountry.population} habitantes</p>
        <h3>Actividades: </h3>
        
        {
        
        myCountry.activities?.map((el) => {
            return (        
                <div className= "activity"> 
                <h3>{el.name}</h3> 
                <h3>dificultad: {el.difficulty}</h3> 
                <h3>duración: {el.duration} </h3>
                <h3>temporada: {el.season}</h3>
                </div>
                )
        }) 
    }
                   

        </div> :
        
        <div>loading ...</div>    
        }   
    </div>
}