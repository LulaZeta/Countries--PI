import { useDispatch } from "react-redux"
import { sort } from "../../redux/actions"
import { ASCENDENTE, DESCENDENTE } from "../contantes/sort"


export default function Order() {
    const dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(sort(e.target.value))
    }

    return(
    <select name="select" onChange={onSelectChange}>
        <option value={ASCENDENTE}>ascendente</option>
         <option value={DESCENDENTE}>descendente</option>
    </select>
    )
}