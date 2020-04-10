import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
});

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    console.log(ciudad);
    
  },[ciudad, pais]);


  return (
    <Fragment>
    <Header titulo="Clima REACTJS"></Header>

    <div className="contenedor-form mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <Formulario busqueda={busqueda} setBusqueda={setBusqueda}/>
          </div>
          <div className="col-lg-6 col-sm-12 ">
            1
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
