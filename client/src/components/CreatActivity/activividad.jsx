import React, { useEffect } from 'react';
import { myActivity, deleteActivity } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function ActivitiesDetails({
  name,
  season,
  duration,
  difficulty,
  countries,
}) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const myAct = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(myActivity(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteActivity(myAct.id));
    alert('la actividad fue borrada');
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Link to="/home">
          <button>Volver</button>
        </Link>
      </div>

      {myAct ? (
        <div>
          <button onClick={(e) => handleDelete(e, myAct.id)}>
            BORRAR ACTIVIDAD
          </button>
          <h1>ACTIVIDAD: {myAct.name}</h1>
          <h4>{myAct.season}</h4>
          <p>dificultad:{myAct.difficulty}</p>
          <p>duración:{myAct.duration}</p>
          {myAct.countries?.map((el) => {
            return (
              <div>
                <h3>{el.name}</h3>
                <img
                  src={el.image}
                  alt="imagen not found"
                  width="120px"
                  height="80px"
                />
                <p>Continente: {el.continents}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div>loading ...</div>
      )}
    </div>
  );
}
