import React from 'react';
import Countries from '../Countries/countries';
import Navbar from '../Navbar/Navbar';

import FilterActivity from '../Filters/filterActivity';
import FilterContinents from '../Filters/filterContienes';
import FilterCountries from '../Filters/filterCountries';
import FilterPopulation from '../Filters/filterPopulation';

import Order from '../Order/order';
//import ReLoad from '../Reload/reload';
import SearchBar from '../SearchBar/searchBar';
import './home.css';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';
import { useEffect } from 'react';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(
    (e) => {
      dispatch(getCountries());
    },
    [dispatch]
  );

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* <div className="inicio-busqueda">
        <ReLoad />
      </div> */}
      <div className="inputs">
        <FilterContinents />
        <FilterCountries />
        <SearchBar />
      </div>
      <div className="orden">
        <Order />
        <FilterActivity />
        <FilterPopulation />
      </div>

      <div>
        <Countries />
      </div>
    </div>
  );
}
