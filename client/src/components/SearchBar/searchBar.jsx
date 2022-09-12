import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountries } from '../../redux/actions';
//import lupa from '../../assets/img/lupa.png';
import './searchBar.css';
export default function SearchBar() {
  const [search, setSearch] = useState('');
  let dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    if (search.length === 0) {
      return alert('Pais no existente');
    } else {
      dispatch(searchCountries(search));
      setSearch('');
    }
  }

  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  return (
    <div className="search-box">
      <form className="search_form" onSubmit={onSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={onInputChange}
          value={search}
          placeholder=" buscar pais ..."
        />
        {/* <button type="submit" value="Buscar">
          <img src={lupa} alt="buscar" />
        </button> */}
      </form>
    </div>
  );
}
