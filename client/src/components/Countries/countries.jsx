
import { useSelector} from 'react-redux';
import Country from '../Country/country';


export default function Countries (){
    let countries =useSelector((state) => state.filteredCountries)
   
    
    return <div>
         
         {countries.flat().map((el) => {
             return <Country name={el.name} image = {el.image} continents = {el.continents} id = {el.id} />
         })}
    </div>
}