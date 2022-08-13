import React from 'react';
import SearchBar from '../SearchBar/searchBar';
//import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar_container">
      <nav>
        <ul className="list">
          <li className="items">
            <a href="/home" className="items_a">
              Countries.
            </a>
          </li>

          <li className="items">
            <a href="/home/activity" className="items_a">
              Crear actividad
            </a>
          </li>
          <li className="items">
            <SearchBar />
          </li>
        </ul>
      </nav>
    </div>
  );
}
