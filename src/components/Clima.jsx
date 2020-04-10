import React from 'react';

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
            <p className="card-text temperatura">{parseFloat(main.temp-kelvin,2).toFixed(2)}</p>
          </div>
        </div>
     );
}
 
export default Clima;