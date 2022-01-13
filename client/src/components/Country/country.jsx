import { Link } from "react-router-dom"


export default function Country({name, continents, image, id}) {
    return <div>
        <h3>{name}</h3>
        <div>
        <Link to={"/home/" + id}>
        <img src = {image} alt="imagen not found" width="320px" height="200px" />
        </Link>
        </div>
        <h4>{continents}</h4>
        <h4>{id}</h4>

            
    </div>
}