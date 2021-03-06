import React, {useState} from 'react'
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

    const [error, setError] = useState(false)

    //funcion que colona los elementos en el state
    const handleChange = e => {
        //actualizar el state
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    const { ciudad, pais } = busqueda;

    const handleSubmit =e=> {
        e.preventDefault();


        //Validar 
        if(ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        //Pasar al componente Principal
        //Va detectar cuando vayamos a realizar una consulta
        setConsultar(true);
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div className="form-group">
              
              { error ? <Error mensaje="Tiene que llenar todos los campos"/> : null }

              <input type="text" name="ciudad" onChange={handleChange} value={ciudad} id="ciudad" className="form-control" placeholder="Ciudad" aria-describedby="helpId"/>
            </div>
            <div className="form-group">
              <select className="form-control" onChange={handleChange} name="pais" value={pais} id="pais" placeholder="País">
                <option value="">--Seleccione un país</option>
                <option value="DO">República Dominicana</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="PE">Perú</option>
              </select>
            </div>
            <button type="submit" className="btn btn-block btn-lg btn-warning text-dark mb-5">Buscar Clima</button>
        </form>
     );
}

Formulario.propTypes = {
  busqueda: PropTypes.object.isRequired,
  setBusqueda: PropTypes.func.isRequired,
  setConsultar: PropTypes.func.isRequired

}
 
export default Formulario;