import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getAllActivities, filterActivity } from "../../redux/actions";

export default function FilterActivity() {
    const dispatch = useDispatch()
    const act = useSelector((state) => state.activity)
    console.log("Estas son las ACTIVIDADES que me traiga por estado",act)
   
    
    function handleFilterActivity(e){
        e.preventDefault();
        dispatch(filterActivity( e.target.value ))
    }
    
    useEffect(()=>{
        dispatch( getAllActivities())
    },[dispatch])

        return(
        <div>
            <select name="select" onChange={handleFilterActivity}>
                <option value="todos" >Actividades</option>

               {
               act?.length && act.map((el) => (<option value ={el.name} >{el.name}</option>)) 
                }

            </select>
        </div>
    )
}    









//     return(
//         <div>
//             <select name="select" onChange={handleFilterActivity}>
//                 <option>Buscar actividad</option>
//                {act.map((el)=> 
//                 <option value ={el.name} >{el.name}</option>
//                 ) }
//             </select>
//         </div>
//     )
// }