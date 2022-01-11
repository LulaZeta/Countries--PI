import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import { getActivity } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";



export default function CreatActivity(){
    const dispatch = useDispatch()
    const history = useNavigate()
    const activities = useSelector((state)=> state.activity)

    const [input, setInput] = useState({
        name: "",
        difficulty:"",
        duration:"",
        season:"",
        country: []
    })
    useEffect(() => {
        dispatch(getActivity());
    }, []);

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value 
        })
        function handleCheck(e){
            if(e.target.checked){
                setInput({
                    ...input,
                    [e.target.name] : e.target.value 
                })
            }   
        }
    
        function handleSelect(e){
                setInput({
                    ...input,
                    country : [...input.country,e.target.value] 
                })
            } 
        function handleSubmit(e){
                e.preventDefault();
                console.log(input)
                dispatch(postCharacter(input))
                alert("Actividad creado")
                setInput({
                    name: "",
                    difficulty:"",
                    duration:"",
                    season:"",
                    country: []
                })
                history('/home')
            }
        function handleDelete(el){
                setInput({
                    ...input,
                    occupation : input.occupation.filter(occ => occ !== el)
                })
            }    

    return(
        <div>
            <h2>Creá tu actividad</h2>
            <form>
                <div>
                    <label>NOMBRE</label>
                    <input 
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={handleChange}
                    />
                </div>
           
                <div>
                    <label>DIFICULTAD: </label>
                    <label for="1">1</label>
                    <input type="radio" id="1" name="difficulty" value="1" onChange={handleCheck}/>
                    <label for="2">2</label>
                    <input type="radio" id="2" name="difficulty" value="2"onChange={handleCheck}/>
                    <label for="3">3</label>
                    <input type="radio" id="3" name="difficulty" value="3"onChange={handleCheck}/>
                    <label for="4">4</label>
                    <input type="radio" id="4" name="difficulty" value="4"onChange={handleCheck}/>
                    <label for="5">5</label>
                    <input type="radio" id="5" name="difficulty" value="5"onChange={handleCheck}/>
                    
                </div>
                <div>
                    <label>TEMPORADA</label>
                    <input type="checkbox" id="Summer" name="season" value="Summer"onChange={handleCheck}/>
                    <label for="Summer">Verano</label>
                    <input type="checkbox" id="Autumn" name="season" value="Autumn"onChange={handleCheck}/>
                    <label for="Autumn">Otoño</label>
                    <input type="checkbox" id="Winter" name="season" value="Winter"onChange={handleCheck}/>
                    <label for="Winter">Invierno</label>
                    <input type="checkbox" id="Spring" name="season" value="Spring"onChange={handleCheck}/>
                    <label for="Spring">Primavera</label>
                    <input type="checkbox" id="Autumn" name="season" value="Autumn"onChange={handleCheck}/>
                    <label for="Autumn">Otoño</label>  
                        
                </div>
                <div>
                    <label>DURACIÓN</label>
                    <input 
                    type="number"
                    value={input.duration}
                    name="duration"
                    onChange={handleChange}
                    />
                </div>

                <div>
            <select name="select" onChange={handleSelect}>
               {countries.map((el)=> 
                <option value ={el.name} >{el.name}</option>
                ) }
            </select>
            <ul><li>{input.country.map(el=> el + " , ")}</li></ul>
            <button type='submit'>Crear</button>
                </div>
            </form>
        </div>
    )
    }
}