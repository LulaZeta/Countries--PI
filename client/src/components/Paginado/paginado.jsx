import React from "react";
import { useState } from "react";
//import Country from "../Country/country";
import Paginados from "./Paginados";
import { Link } from "react-router-dom";

export default function Paginado(){
    const filterCountries = useState ((state) => state.filteredCountries)     //me traigo del reducer todos los paises
    const [currentPage, setCurrentPage] = useState(1)       //estado local pagina actual
    const [countriesPerPage, setcountriesPerPage] = useState(10)     //paises por pagina
    const indexOfLastCountry =  currentPage * countriesPerPage   //10   indice del ultimo pais
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage   //0  
    const currentCountries = filterCountries.flat().slice(indexOfFirstCountry, indexOfLastCountry)


//pag 1 --> 0 ----- 10
//pag 2 --> 11 ---- 20

    const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}
    return(
        <div>
            <Paginados 
            countriesPerPage={{countriesPerPage}}
            filteredcountries={filterCountries.flat().length}
            paginado={paginado}
            />
            {currentCountries?.map(el => {
                return (
                    <fragment>
                        <Link to={"/" +el.id}>
                            <Country name={el.name} image = {el.image} continents = {el.continents} id = {el.id} />
                        </Link>
                    </fragment>
                )
            })}
        </div>
    )
}   