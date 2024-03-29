import React from 'react';
import { useEffect } from 'react';
import { countryDetails } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import arrow from '../../assets/img/leftarrow.png';
import './countryDetails.css';

export default function CountryDetails(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(countryDetails(id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const atras = () => {
    navigate(-1);
    props.scrollTo();
  };

  const myCountry = useSelector((state) => state.detail);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="detail_container">
        <div className="atras">
          <div onClick={() => atras()}>
            <img src={arrow} alt="back" />
            <button>atrás</button>
          </div>
        </div>
        {myCountry ? (
          <div>
            <h1>
              {myCountry.name} - {myCountry.id}
            </h1>
            <img
              src={myCountry.image}
              alt="imagen not found"
              width="320px"
              height="200px"
            />
            <h2>Continente: {myCountry.continents}</h2>
            <h2>Capital: {myCountry.capital}</h2>

            <p>Subregión: {myCountry.subregion}</p>
            <p>Área: {myCountry.area} Km²</p>
            <p>Población: {myCountry.population} habitantes</p>
            <hr></hr>
            <h3>Actividades: </h3>

            {myCountry.activities?.length > 0 ? (
              myCountry.activities.map((el) => {
                return (
                  <div className="container-activity">
                    <div className="box-activity">
                      <div className="activity">
                        <Link to={'/home/activity/' + el.id}>
                          <button className="btnActivity">{el.name}</button>
                        </Link>
                        <p>dificultad: {el.difficulty}</p>
                        <p>duración: {el.duration} </p>
                        <p>temporada: {el.season}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <Link to={'/home/activity'}>
                  <button className="btnCreate">CREAR ACTIVIDAD</button>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div>loading ...</div>
        )}
      </div>
    </div>
  );
}
