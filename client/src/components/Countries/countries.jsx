import { useState } from 'react'
import { useSelector } from 'react-redux'
import Paginados from '../Paginado/Paginados'
import Country from '../Country/country'



export default function Countries () {
  let countries = useSelector(state => state.filteredCountries)


  const [currentPage, setCurrentPage] = useState(1)
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
      
      {currentCountries.map(el => {
        return (
          <Country
            name={el.name}
            image={el.image}
            continents={el.continents}
            id={el.id}
          />
        )
      })}

      <div className='pagination'>
        <div className='cont'>
              <Paginados
                 countriesPerPage={countriesPerPage}
                 filteredCountries={countries.length}
                 currentPage={currentPage}
                 pagination={pagination}
             />
        </div>
      </div>
      
    </div>
  )
}