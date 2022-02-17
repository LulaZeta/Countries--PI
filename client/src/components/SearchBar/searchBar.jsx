import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchCountries } from "../../redux/actions"

export default function SearchBar(){
    const [search, setSearch] = useState('')
    let dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault()
        if (search.length === 0) {
            return alert("Pais no existente")
        } else {
        dispatch(searchCountries(search))
        setSearch('')
    }
}

    function onInputChange(e){
        e.preventDefault()
        setSearch(e.target.value)

    }
    return <div>
        <form onSubmit = {onSubmit}>
            <input type="text" onChange={onInputChange} value={search}/>
            <input type= "submit" value="Buscar" />
        </form>
    </div>
}