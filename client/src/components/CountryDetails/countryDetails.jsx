import React from "react";
import { useEffect } from "react";
import { countryDetails } from "../../redux/actions"; 
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function CountryDetails(props) {
    console.log(props) 
          
    const {id} = useParams();
    const dispatch = useDispatch()
    console.log(id)
    
    useEffect(()=>{
        dispatch(countryDetails(id))
       
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch])

    const myCountry = useSelector((state)=>state.detail)
    return <div>
        <div>
            <Link to='/home'><button>Volver</button></Link>
        
            <Link to='/home/activity'><button>CREAR ACTIVIDAD</button></Link>
        </div>
        {
            myCountry ?
            <div>

        <h1>{ myCountry.name} - {myCountry.id}</h1>
        <img src = { myCountry.image} alt="imagen not found" width="320px" height="200px" />
        <h2>Continente: {myCountry.continents}</h2>
        <h2>Capital: {myCountry.capital}</h2>
        
        <p>Subregión: {myCountry.subregion}</p>
        <p>Área: {myCountry.area} Km²</p>
        <p>Población: {myCountry.population} habitantes</p>
        <h3>Actividades: </h3>
        
        {
        
        myCountry.activities?.map((el) => {
            return (        
                <div className= "activity"> 
                <Link to={"/home/activity/" + el.id}>
                <h3>{el.name}</h3> 
                </Link>
                <p>dificultad: {el.difficulty}</p> 
                <p>duración: {el.duration} </p>
                <p>temporada: {el.season}</p>
                </div>
                )
        }) 
    }
                   

        </div> :
        
        <div>loading ...</div>    
        }   
    </div>
}