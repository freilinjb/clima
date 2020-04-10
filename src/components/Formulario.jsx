import React from 'react'

const Formulario = () => {
    return ( 
        <form>
            <div className="form-group">
              <input type="text" name="ciudad" id="ciudad" className="form-control" placeholder="Ciudad" aria-describedby="helpId"/>
            </div>
            <div className="form-group">
              <select className="form-control" name="pais" id="pais" placeholder="País">
                <option value="">--Seleccione un país</option>
                <option></option>
                <option></option>
              </select>
            </div>
        </form>
     );
}
 
export default Formulario;