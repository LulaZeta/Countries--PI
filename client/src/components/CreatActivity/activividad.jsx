

export default function Activities({name, season, duration, difficulty, countries}) {
    return <div>
        <h1>ACTIVIDAD:</h1>
        <h2>{countries.map((el)=>el.name)}</h2>
        <h3>{name}</h3>
        <h3>{season}</h3>       
        <h4>dificultad:{difficulty}</h4>
        <h4>duración:{duration}</h4>
           
    </div>
}