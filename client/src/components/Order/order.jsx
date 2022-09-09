import { useDispatch } from 'react-redux';
import { sort } from '../../redux/actions';
import { ASCENDENTE, DESCENDENTE } from '../contantes/sort';
import { useEffect, useState } from 'react';

export default function Order() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState('');

  useEffect(() => {
    dispatch(sort(order));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  function onSelectChange(e) {
    setOrder(e.target.value);
  }

  return (
    <div className="select">
      <select name="select" onChange={onSelectChange}>
        <option>Ordenar por abc</option>
        <option value={ASCENDENTE}>ascendente</option>
        <option value={DESCENDENTE}>descendente</option>
      </select>
    </div>
  );
}
