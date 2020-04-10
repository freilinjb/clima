import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    const { main, name } = resultado;
    //si no hay nombre (espera a que el componente este listo)
    if(!name) return null;

    //Grados kelvin

    const kelvin = 273.15;

    return ( 
        <div className="card text-left">
          <div className="card-body">
            <h4 className="card-title">El clima de {name} es:</h4>
            <h1 className="temperatura text-center">
                {parseFloat(main.temp-kelvin,2).toFixed(2)} 
                <span>&#x2103;</span>
            </h1>
            <p className="text-center">Temperatura Máxima:
                {parseFloat(main.temp_max-kelvin,2).toFixed(2)} 
                <span>&#x2103;</span>
            </p>
            <p className="text-center">Temperatura Minima:
                {parseFloat(main.temp_min-kelvin,2).toFixed(2)} 
                <span>&#x2103;</span>
            </p>
          </div>
        </div>
     );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;