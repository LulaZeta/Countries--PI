import { useDispatch } from "react-redux"
import { sort } from "../../redux/actions"
import { ASCENDENTE, DESCENDENTE } from "../contantes/sort"
import { useEffect, useState } from "react"

export default function Order() {
    const dispatch = useDispatch()
     /* eslint-disable*/
    const [order, setOrder] =useState('')
    /* eslint-enable*/
    
    useEffect(() => {
        dispatch(sort(order))
    }, [order])

    function onSelectChange(e){
        dispatch(sort(e.target.value))
    }

    return(
    <select name="select" onChange={onSelectChange}>
        <option>Ordenar todos los paises</option>
        <option value={ASCENDENTE}>ascendente</option>
         <option value={DESCENDENTE}>descendente</option>
    </select>
    )
}