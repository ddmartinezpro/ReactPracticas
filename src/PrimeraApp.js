import React from "react";
import PropTypes from 'prop-types'

const PrimeraApp = ({saludo, despedida = 'Adios'}) => {

    const mensajePrincipal = 'Hola mundo';
    const mensajeSecundario = 'Este es un proyecto de prueba';

    return (
        <>
            <h1> { mensajePrincipal } </h1>
            <p> { mensajeSecundario } </p>
            <p> { saludo } </p>
            <p> { despedida } </p>
        </>
    );
}

PrimeraApp.propTypes ={
    saludo: PropTypes.string.isRequired,
}

export default PrimeraApp;
