import React from "react";
import { useEffect } from "react";
import { myActivity, deleteActivity } from "../../redux/actions"; 
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ActivitiesDetails({name, season, duration, difficulty, countries}) {
    const {id} = useParams();
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(myActivity(id))
         // eslint-disable-next-line react-hooks/exhaustive-deps

    },[dispatch])

    const myAct = useSelector((state)=>state.myActivity)
    
    return <div>
        <div>
        <Link to='/home'><button>Volver</button></Link>
        </div>

        {
            myAct ?
            <div>
        <button onClick={()=>deleteActivity(myAct.id)}>BORRAR</button>
        <h1>ACTIVIDAD: {myAct.name}</h1>
        <h4>{myAct.season}</h4>       
        <p>dificultad:{myAct.difficulty}</p>
        <p>duración:{myAct.duration}</p>
        {
            myAct.countries?.map((el)=>{
                return (
                    <div>
                    <h3>{el.name}</h3> 
                    <img src = { el.image} alt="imagen not found" width="120px" height="80px" />
                    <p>Continente: {el.continents}</p>
                    </div>
                )
            })
        }

         </div> :
        
        <div>loading ...</div> 
         }
    </div>
}