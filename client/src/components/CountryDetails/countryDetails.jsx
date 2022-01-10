// import { useEffect } from "react";
// import { countryDetails } from "../../redux/actions"; 
// import { useParams} from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";


// export default function CountryDetails(props) {
//     console.log(props)       
//     const {id} = useParams();
//     const dispatch = useDispatch()
    
//     useEffect(()=>{
//         dispatch(countryDetails(id))
//     },[dispatch])

//     const myCountry = useSelector((state)=>state.detail)
//     return <div>
//         {
//             myCountry.length > 0 ?
//             <>

//         <h3>{ myCountry.name}</h3>
//         <img src = { myCountry.image} alt="imagen not found" width="320px" height="200px" />
        
//         </> :
//         <div>loading ...</div>    
//         }   
//     </div>
// }