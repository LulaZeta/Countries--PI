import React from 'react';

import { useDispatch } from 'react-redux';

import { filterContinents } from '../../redux/actions';

export default function FilterContinents() {
  const dispatch = useDispatch();

  function handleFilterContinents(e) {
    e.preventDefault();
    dispatch(filterContinents(e.target.value));
  }

  return (
    <div className="select">
      <select name="select" onChange={handleFilterContinents}>
        <option value="All">Todos los Continentes</option>
        <option value="South America">América del Sur</option>
        <option value="North America">América del Norte</option>
        <option value="Europe">Europa</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceanía</option>
        <option value="Antarctica">Antártida</option>
      </select>
    </div>
  );
}
