import React from "react";

export default function Paginados({countriesPerPage, filteredCountries, paginado}) {
    const pageNumber = []
    for ( let i=0; i<= Math.ceil(filteredCountries.flat()/countriesPerPage); i++){
        pageNumber.push(i + 1)
    }
    return(
        <nav>
            <ul>
                { pageNumber && pageNumber.map(number => ( 
                    <li key={number}>
                    <a onClinck={() => paginado(number)}>{number}</a>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}