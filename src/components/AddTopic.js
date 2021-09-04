import React, {useState} from 'react'
import PropTypes from "prop-types"

export const AddTopic = ({setTopic}) => {
  

    const [inputValue, setInputValue] = useState("Find a joke about...");
    const handleInputChange = (element) => {
        setInputValue(element.target.value); //Tras hacer esto el INPUTVALUE tendra el ultimo valor escrito
    }
    const handleSubmit = (element) => {
        element.preventDefault(); /// ****** Esto es para evitar que el form provoque un refresh de la pagina
        if(inputValue.trim().length > 2){
            setTopic( topics =>  [ inputValue, ...topics] ); // obt el estado anterior y anexamos el input value
            setInputValue("");
        }
    }
    const handleClick = (element) => { 
        setInputValue("");
    }

    return (
        <form className="animate__animated animate__zoomIn animate__delay-0.5s" onSubmit={handleSubmit}>
            <input  className="formInput"
                    type="text"
                    value= {inputValue}
                    onChange={ handleInputChange }
                    onClick={handleClick}
            />
          </form>
    )
}

AddTopic.propTypes = {
    setTopic: PropTypes.func.isRequired  // es func porque el setTopic es una funcion lo que se envia
}

AddTopic.defaultProps = {
    setTopic: []
}
