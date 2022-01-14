import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getActivity, getAllActivities } from "../../redux/actions";

export default function FilterActivity() {
    const dispatch = useDispatch()
    const act = useSelector((state) => state.activity)

    
    function handleFilterActivity(e){
        e.preventDefault();
        dispatch(getActivity( e.target.value ))
    }
    useEffect(()=>{
        dispatch(getAllActivities())
    },[])

        

    return(
        <div>
            <select name="select" onChange={handleFilterActivity}>
                <option>Buscar actividad</option>
               {act.map((el)=> 
                <option value ={el.name} >{el.name}</option>
                ) }
            </select>
        </div>
    )
}