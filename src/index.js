import React from "react";
import ReactDOM from "react-dom";
import About from './components/about';

//Dos componentes: Elemento a renderizar y elemento donde renderizar
//React se debe transpilar y para ello usamos babel - Transforma el codigo React a JS
ReactDOM.render( < About / > , document.getElementById('app'));