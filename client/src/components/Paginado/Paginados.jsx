import React from 'react'
import './Paginados.css'

export default function Paginados ({ countriesPerPage,
  filteredCountries,
  pagination
}) {
  const pageNumbers = []

  for (let i = 0; i < Math.ceil(filteredCountries / countriesPerPage); i++) {
    pageNumbers.push(i + 1)
  }

  return (
    <nav className='nav-pagination'>
      <ul className='pagination'>
        {pageNumbers &&
          pageNumbers.map(n => {
            return (
            <li className='number' key={n}>
              <button className='btnPagination' onClick={() => pagination(n)}>{n}</button>
            </li>
          )
          })}
      </ul>
    </nav>
  )
}