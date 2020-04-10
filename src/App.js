import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, setConsultar] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async() => {
      
      if(consultar) {
        const appId = '491cc87fd861aad3807a5ba40dd20a40';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        console.log(resultado);
      }
      
    }
      
  },[consultar]);


  return (
    <Fragment>
    <Header titulo="Clima REACTJS"></Header>

    <div className="contenedor-form mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <Formulario busqueda={busqueda} setBusqueda={setBusqueda} setConsultar={setConsultar}/>
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
