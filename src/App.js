import React, {Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
    <Header titulo="Clima REACTJS"></Header>

    <div className="contenedor-form mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <Formulario/>
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
