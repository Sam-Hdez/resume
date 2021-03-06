/*
Nuestros hooks tiene 3 tareas: manejar el estado, conseguir información 
y entregarle esta información a nuestros componentes a través del estado.
*/
import React, { useState } from "react";

const HelloWorld = () => {
    const [active, setActive] = useState(true);
    
    const handleClick = () => {
        setActive(!active);
    }
    
    return (
        <div className="HelloWorld">
            <button onClick={handleClick}>Hide</button>
            {
                active&&
                <h1>Hello World with useState - Hooks</h1>
            }
        </div>
    );
}

export default HelloWorld;