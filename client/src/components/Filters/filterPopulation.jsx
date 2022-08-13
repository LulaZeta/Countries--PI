import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterPopulation } from '../../redux/actions';
import { ASCENDENTE, DESCENDENTE } from '../contantes/sort';

export default function FilterPopulation() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState('');

  useEffect(() => {
    dispatch(filterPopulation(order));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  function handleOrderP(e) {
    e.preventDefault();

    setOrder(e.target.value);
  }

  return (
    <div className="select">
      <select name="select" onChange={(e) => handleOrderP(e)}>
        <option>Ordenar por población</option>
        <option value={ASCENDENTE}>Menor Poblacion</option>
        <option value={DESCENDENTE}>Mayor Poblacion</option>
      </select>
    </div>
  );
}
