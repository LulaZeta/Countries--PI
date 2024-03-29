import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Paginados from '../Paginado/Paginados';
import Country from '../Country/country';
import './countries.css';

export default function Countries() {
  let countries = useSelector((state) => state.filteredCountries);

  const [currentPage, setCurrentPage] = useState(1); //mi estado local, con la primer pagina q se renderiza
  /* eslint-disable*/
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  /* eslint-enable*/
  const indexLast = currentPage * countriesPerPage;

  const indexFirst = indexLast - countriesPerPage;

  const currentCountries = countries.slice(indexFirst, indexLast);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [countries]);

  return (
    <div className="margin">
      <div className="flags">
        <div className="container">
          {currentCountries.map((el) => {
            return (
              <Country
                image={el.image}
                name={el.name}
                continents={el.continents}
                id={el.id}
              />
            );
          })}
        </div>
      </div>
      <div>
        <div className="pagination">
          <Paginados
            countriesPerPage={countriesPerPage}
            filteredCountries={countries.length}
            currentPage={currentPage}
            pagination={pagination}
          />
        </div>
      </div>
    </div>
  );
}
