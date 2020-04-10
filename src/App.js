import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async() => {
      
      if(consultar) {
        const appId = '491cc87fd861aad3807a5ba40dd20a40';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado);
      }
    }
    consultarAPI();

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
            <Clima resultado={resultado}/> 
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
