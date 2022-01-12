import React, { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../../redux/actions";



export default function CreatActivity (){

    const dispatch = useDispatch()
    const pais = useSelector((e)=> e.countries);
    const activities = useSelector(state=> state.activity);
    const [errors,setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
        difficulty:"",
        duration:"",
        season:"",
        country: []
    })  
    useEffect(()=> {
        dispatch(getCountries());
    }, [dispatch])



    function validate(input) {
        let errors = {} ;
        if (!input.name) {
            errors.name = 'Nombre de Actividad Requerido'
        } else {
            for(var i=0; i< activities.lenght; i ++){
                if(activities[i].name === input.name) errors.name = 'Actividad ya creada'
            }
        }
        if(!input.difficulty) {
            errors.difficulty = 'Completa campo de dificultad'
        }
        if(!input.duration) {
            errors.duration = 'completa el tiempo, ejemplo: 1hs30min' 
           }
        if(!input.season) {
            errors.season= 'elige una estación del año!!!'
        }
        if(input.country.lenght < 1){
            errors.country ='¿dónde ocurre tu actividad?'
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
            country: []
        })        
        } else {
        alert("Por favor, completa todos los campos")
        }
    }
    function handleSelect(e){
             setInput ({
            ...input,
            country : [...input.country, e.target.value]
        })
        
        console.log(input)
        
    }
    function handleDelete (el) {
        setInput({
          ...input,
          country: input.country.filter(p => p !== el)
        })
      }


    return (<div> 
                <h2>Crear actividad</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label>NOMBRE</label><br/>
                        <input  placeholder='nombre de la actividad ...'
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={handleChange}
                        />{errors.name && (
                            <p className="error">{errors.name}</p>
                        )}
                    </div><br/>

                    <div>
                        <label>DIFICULTAD</label><br/>

                        <label for="1">1</label>
                        <input type="radio" id="1" name="difficulty" value="1" onChange={(e) => handleCheck(e)}/>
                        <label for="2">2</label>
                        <input type="radio" id="2" name="difficulty" value="2" onChange={(e) => handleCheck(e)}/>
                        <label for="3">3</label>
                        <input type="radio" id="3" name="difficulty" value="3" onChange={(e) => handleCheck(e)}/>
                        <label for="4">4</label>
                        <input type="radio" id="4" name="difficulty" value="4" onChange={(e) => handleCheck(e)}/>
                        <label for="5">5</label>
                        <input type="radio" id="5" name="difficulty" value="5" onChange={(e) => handleCheck(e)}/>
                        {errors.difficulty && (
                            <p className="error">{errors.difficulty}</p>
                        )}
                    </div><br/>
                    <div>
                        <label>TEMPORADA: </label>
                        <input type="checkbox" id="Summer" name="season" value="Summer" onChange={(e) => handleCheck(e)}/>
                        <label for="Summer">Verano</label>
                        <input type="checkbox" id="Autumn" name="season" value="Autumn" onChange={(e) => handleCheck(e)}/>
                        <label for="Autumn">Otoño</label>
                        <input type="checkbox" id="Winter" name="season" value="Winter" onChange={(e) => handleCheck(e)}/>
                        <label for="Winter">Invierno</label>
                        <input type="checkbox" id="Spring" name="season" value="Spring" onChange={(e) => handleCheck(e)}/>
                        <label for="Spring">Primavera</label>
                        {errors.season && (
                            <p className="error">{errors.season}</p>
                        )}
                        
                       
               
                    </div><br/>
                    <div>
                        <label>DURACIÓN</label><br/>
                        <input 
                             placeholder='ejemplo: 4hs30min'
                             name="duration"
                             onChange={handleChange}
                         /> 
                         {errors.duration && (
                            <p className="error">{errors.duration}</p>
                        )}

                    </div><br/>
                    <div>
                         <div className='select' >
                            <select required onChange={(e) => handleSelect(e)}>
                                
                                 <option>seleccionar pais</option>
                                    { pais.map((el) => (
                                     <option value={el.name}>{el.name}</option>
                                     ))
                                     }
                             </select>

                     </div>
                     </div>
                     <ul>
                         <li>{input.country.map(el => el + ",")}</li>
                    </ul>

                     <button type='submit'> CREAR </button>
                    
                     </form>
                     {input.country.map(el => 
                     <div className="">
                         <p>{el}</p>
                            <button className="" onClick={() => handleDelete(el)}>x</button>
                     </div>
                    )}
                      </div>)
               
                     
}