/**
 * PRUEBAS DE JAVASCRIPT EN REACT
 **/

// const list = [1, 2, 3];
//
// const list2 = list.map( (n) => {
//     return n * 4;
// } );
//
// console.log(list);
// console.log(list2);
//
// // Cuando se quiere devolver un objeto en una funcion de flecha se colocan '()' y luego '{}'
// const getUser = (nombre) => ({
//     id: 1,
//     nombre
// });
//
// // Si no se colocan los '()' hay que hacerlo con el 'return'
// // const getUser = (nombre) => {
// //     return {
// //         id: 1,
// //         nombre
// //     };
// // };
//
// const user = getUser('Pepe');
// console.log(user);

/**
 * COMIENZA LA APLICACION DE COUNTERAPP
 **/

import React from 'react';
import {createRoot} from "react-dom/client";

import './index.css';
import CounterApp from "./CounterApp";

const divRoot = document.querySelector('#root');

const root = createRoot(divRoot);

// root.render(<PrimeraApp saludo="Esto es un saludo" />);
root.render(<CounterApp value={3} />);

























