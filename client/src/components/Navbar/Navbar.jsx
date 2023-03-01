import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="Navbar_container">
        <div className="nav"></div>
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
          </ul>
        </nav>
      </div>
    </div>
  );
}
