import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async() => {
      
      if(consultar) {
        const appId = '491cc87fd861aad3807a5ba40dd20a40';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado);
        setConsultar(false);

        //Detecta si hubo resultado correctos en la consulta
        if(resultado.cod === "404") { 
          setError(true);
        } else {
          setError(false);
        }
      }
    }
    consultarAPI();

  },[consultar, ciudad, pais]);

  let componente;
  //Carga condicional de componente
  if(error) {
    componente = <Error mensaje = "No hay resultados"/>
  } else {
    componente = <Clima resultado={resultado}/>
  }

  

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
            { componente }
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
