import { Link } from "react-router-dom";
import './country.css'


export default function Country({name, continents, image, id}) {
    return <div className= 'container'>
             <div className='card'>
                <h3>{name}</h3>
            <div>
                <Link to={"/home/" + id}>
                     <img src = {image} alt="imagen not found" width="200px" height="120px" />
                </Link>
            </div>
                <h4>{continents}</h4>
                 <h4>{id}</h4>
            </div>
            
         </div>
}