
export default function Country({name, continents, image, id}) {
    return <div>
        <h3>{name}</h3>
        <img src = {image} alt="imagen not found" width="320px" height="200px" />
        <h4>{continents}</h4>
        <h4>{id}</h4>

            
    </div>
}