import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getCountries} from '../../redux/actions'
import Country from '../Country/country';


export default function Countries (){
    let countries =useSelector((state) => state.filteredCountries)
   
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountries())
    },[dispatch])
    //console.log(countries)
    return <div>
         
         {countries.flat().map((el) => {
             return <Country name={el.name} image = {el.image} continents = {el.continents} id = {el.id} />
         })}
    </div>
}