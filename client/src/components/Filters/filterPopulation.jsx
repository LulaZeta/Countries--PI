import React, {useState} from "react";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import {filterPopulation} from "../../redux/actions"

import { ASCENDENTE, DESCENDENTE } from "../contantes/sort"

export default function FilterPopulation(){
  const dispatch = useDispatch();
  const [order, setOrder] = useState('')
  

  useEffect(()=>{
    dispatch(filterPopulation(order))
  },[order])

 function handleOrderP(e) {
  e.preventDefault()
 
  setOrder(e.target.value)
 }



return(
            <div>
               <select name= "select" onChange={e => handleOrderP(e)} >
                    <option>Ordenar por población</option>
                    <option value={ASCENDENTE}>Poblacion Asc</option>
                    <option value={DESCENDENTE}>Poblacion Des</option>
                </select>
            </div>
)
}