import React from "react";
import ReactDOM from "react-dom";
import App from './containers/App';
//import HelloWorld from "./components/HelloWorld";

//Dos componentes: Elemento a renderizar y elemento donde renderizar
//React se debe transpilar y para ello usamos babel - Transforma el codigo React a JS

/*//Ejemplo para entender hooks
ReactDOM.render( < HelloWorld / > , document.getElementById('app'));*/

ReactDOM.render( < App / > , document.getElementById('app'));