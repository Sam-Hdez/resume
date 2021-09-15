//Los hooks no tienen componentes visuales por lo tanto no se nombra con jsx
import { useState, useEffect } from "react";
const api = 'http://localhost:3000'; //'https://us-central1-gndx-cv.cloudfunctions.net/me';

const useGetData = () => {
    const [myData, setData] = useState([]);
    //useEffect tambien sirve para escuchar alguna propiedad
    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => setData(data));
    }, []); //El segundo parametro es vacío porque no escucha ninguna propiedad

    return myData;
}

export default useGetData;