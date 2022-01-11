import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import { postActivity, getActivity } from "../../redux/actions";
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
        activity: []
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
                    status : e.target.value 
                })
            }   
        }
    
        function handleSelect(e){
                setInput({
                    ...input,
                    occupation : [...input.occupation,e.target.value] 
                })
            } 
    return(
        <div>
            <h2>Creá tu actividad</h2>
            <form>
                <div>
                    <label>Nombre</label>
                    <input 
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Temporada</label>
                    <input 
                    type="text"
                    value={input.season}
                    name="season"
                    />
                </div>
                <div>
                    <label>Dificultad</label>
                    <input 
                    type="text"
                    value={input.difficulty}
                    name="name"
                    />
                </div>
                <div>
                    <label>Duracion</label>
                    <input 
                    type="text"
                    value={input.duration}
                    name="season"
                    />
                </div>
            </form>
        </div>
    )
    }
}