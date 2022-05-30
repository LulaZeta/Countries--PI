import React, { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity} from "../../redux/actions";
import { Link, useNavigate} from 'react-router-dom';
import './crearActivity.css'



export default function CreatActivity (){

    const dispatch = useDispatch()
    const pais = useSelector((e)=> e.countries);
    const history = useNavigate()
    //const activities = useSelector(state=> state.activity);
    const [errors,setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
        difficulty:"",
        duration:"",
        season:"",
        country: [],

    })  
    useEffect(()=> {
        dispatch(getCountries());
     
    }, [dispatch])



    function validate(input) {
        let nameTest =/^[a-zA-ZA-y\s]{3,80}$/; //solo letras de 3 a 80 caracteres

        let errors = {} ;

        if (!input.name) {
            errors.name = 'Nombre de Actividad Requerido'
        }else if(!nameTest.test(input.name.trim())) {
            errors.name = 'No se permiten numeros , solo letras de 3 a 80 caracteres'}     
        if(!input.difficulty) {
            errors.difficulty = 'Completa campo de dificultad'
        }
        if(!input.duration) {
            errors.duration = 'completa el tiempo, ejemplo: 1hs30min' 
           }else if(input.duration.length > 25){
               errors.duration = 'solo se perimiten 25 carateres'
           }
           
        if(!input.season) {
            errors.season= 'elige una estación del año!!!'
        }
      
        return errors;
    }
    

    function handleChange(e) {
        setInput({
            ...input, [e.target.name]: e.target.value,
        })
        
        setErrors (validate({
            ...input,
            [e.target.name] : e.target.value 
        }))
        console.log(input)
    }
  
    const handleCheck = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
        setErrors (validate({
            ...input,
            [e.target.name] : e.target.value 
        }))
        console.log(input)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        if(
            input.name &&
            input.difficulty &&  
            input.season &&
            input.duration &&
            input.country.length
            
        ) {
        
        dispatch(postActivity(input))
        alert("Actividad creada")
        setInput({
            name: "",
            difficulty:"",
            duration:"",
            season:"",
            country: [],
          
        }) 
        history('/home')
        
        } else {
        alert("Por favor, completa todos los campos")
        }
     
    }
    function handleSelect(e){
             setInput ({
            ...input,
            country : [...input.country, e.target.value]
            })
        
    }
    function handleDelete (el) {
        setInput({
          ...input,
          country: input.country.filter(p => p !== el)
        })
      }


    return (<div className="crear" > 
                <div>
                    <Link to='/home'><button>Volver</button></Link>
                </div>
                <div className="body-form">
                <div className='form-container'>
            
                <form className='form' onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <h2>Crear actividad</h2>
                        <label>Nombre: </label><br/>
                        <input  placeholder='nombre de la actividad ...'
                        autoComplete='off'
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={handleChange}
                        />{errors.name && (
                            <p className="error">{errors.name}</p>
                        )}
                    </div><br/>

                    <div>
                        <label>Dificultad:</label><br/>

                        <label htmFor="1">1</label>
                        <input type="radio" id="1" name="difficulty" value="1" onChange={(e) => handleCheck(e)}/>
                        <label htmFor="2">2</label>
                        <input type="radio" id="2" name="difficulty" value="2" onChange={(e) => handleCheck(e)}/>
                        <label htmFor="3">3</label>
                        <input type="radio" id="3" name="difficulty" value="3" onChange={(e) => handleCheck(e)}/>
                        <label htmFor="4">4</label>
                        <input type="radio" id="4" name="difficulty" value="4" onChange={(e) => handleCheck(e)}/>
                        <label htmFor="5">5</label>
                        <input type="radio" id="5" name="difficulty" value="5" onChange={(e) => handleCheck(e)}/>
                        {errors.difficulty && (
                            <p className="error">{errors.difficulty}</p>
                        )}
                    </div><br/>
                    <div>
                        <label>Temporada: </label>
                        <input type="checkbox" id="Summer" name="season" value="Summer" onChange={(e) => handleCheck(e)}/>
                        <label htmFor="Summer">verano</label>
                        <input type="checkbox" id="Autumn" name="season" value="Autumn" onChange={(e) => handleCheck(e)}/>
                        <label htmFor="Autumn">otoño</label>
                        <input type="checkbox" id="Winter" name="season" value="Winter" onChange={(e) => handleCheck(e)}/>
                        <label htmFor="Winter">invierno</label>
                        <input type="checkbox" id="Spring" name="season" value="Spring" onChange={(e) => handleCheck(e)}/>
                        <label htmFor="Spring">primavera</label>
                        {errors.season && (
                            <p className="error">{errors.season}</p>
                        )}
                      
               
                    </div><br/>
                    <div>
                        <label>Duración: </label><br/>
                        <input 
                             placeholder='ejemplo: 3hs30min'
                             name="duration"
                             autoComplete='off'
                             onChange={handleChange}
                         /> 
                         {errors.duration && (
                            <p className="error">{errors.duration}</p>
                        )}

                    </div><br/>
                    <div>
                         <div className='select' >
                            <select required onChange={(e) => handleSelect(e)}>
                                
                                 <option>Seleccionar pais</option>
                                    { pais.map((el) => (
                                     <option value={el.name}>{el.name}</option>
                                     ))
                                     }
                             </select>

                     </div>
                     </div>
                     <div className='countrySelection'>
                     {/* <ul>
                         <li>{input.country.map(el => el + ", ")}</li>
                    </ul> */}
               
                  <ul>
                     {input.country.map((el) => 
                     <div key={el} className="countriesSelected">
                        <li className="list">{el}</li>
                        <button className="btnClose" onClick={() => handleDelete(el)}>x</button>
                     </div>
                    )}
                    </ul>
                    
                    </div>
                     <div>                
                     <button className= "btnCreate" type='submit'> CREAR </button>
                     </div>
                     
                      </form>
                    </div>
                    </div>
                      </div>)
               
                     
}