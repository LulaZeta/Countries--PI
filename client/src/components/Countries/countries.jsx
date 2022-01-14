import { useState } from 'react'
import { useSelector } from 'react-redux'
import Paginados from '../Paginado/Paginados'
import Country from '../Country/country'
import './countries.css'
import { Link } from 'react-router-dom'



export default function Countries () {
  let countries = useSelector(state => state.filteredCountries)


  const [currentPage, setCurrentPage] = useState(1)  //mi estado local, con la primer pagina q se renderiza
     /* eslint-disable*/
  const [countriesPerPage, setCountriesPerPage] = useState(10)
    /* eslint-enable*/
  const indexLast = currentPage * countriesPerPage

  const indexFirst = indexLast - countriesPerPage

  const currentCountries = countries.slice(indexFirst, indexLast)

  const pagination = pageNumber => {
    setCurrentPage(pageNumber)
  }

  return ( 
    <div>
        <div>
        <Link to='/home/activity'>
			<button className='crear'>Crear actividad</button>
		</Link>
        </div>
        
      {currentCountries.map(el => {
        return (
         
            
                <Country
                name={el.name}
                image={el.image}
                continents={el.continents}
                id={el.id}
                />
                )
         })
      }
        
      <div className='pagination'>
        
              <Paginados
                 countriesPerPage={countriesPerPage}
                 filteredCountries={countries.length}
                 currentPage={currentPage}
                 pagination={pagination}
             />
        </div>
      </div>
      

  )
}