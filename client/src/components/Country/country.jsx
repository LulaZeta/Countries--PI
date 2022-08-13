import { Link } from 'react-router-dom';
import './country.css';

export default function Country({ name, continents, image, id }) {
  return (
    <div className="body-country">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <Link to={`/home/${id}`}>
              <img
                src={image}
                alt="imagen not found"
                width="150px"
                height="100px"
              />
            </Link>
          </div>
          <div className="card-body">
            <h3>{name}</h3>
            <h4>{continents}</h4>
            <p>{id}</p>
            <div className="card-button">
              <Link to={`/home/${id}`}>
                <button className="button-detail">info</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
