import React, {useState, Fragment} from 'react';
import styled from '@emotion/styled';


const Col9 = styled.div`
  padding-right: 1rem;

  @media (max-width: 589px){
    padding-right: 0;
  }
`;
const Col3 = styled.div`
  @media (max-width: 589px){
    padding-top: 1rem
  }
`;



const Formulario = ( {guardarError, guardarBusqueda} ) => {

  // STATE
  const [termino, guardarTermino] = useState('');


  // SUBMIT
  const buscarImagen = (e) => {
    e.preventDefault();
    
    if (termino.trim() === '') {
      guardarError(true);
      return
    }

    guardarError(false);

    // Mandar la busqueda al componenete APP
    guardarBusqueda(termino);

  };

  return (
    <Fragment>
      <form
        onSubmit={buscarImagen}
      >
        <div className="col-row">
          <Col9 className="col-9">
            <input 
              type="text"
              className="input-100"
              placeholder='Search images by word - eg: coffee || cake'
              onChange={e => guardarTermino(e.target.value)}
            />
          </Col9>
          <Col3 className="col-3">
            <button
              type="submit" 
              className="btn btn-blue btn-100"
            >
              <i className="a-image_search"></i>&nbsp;
              Buscar
            </button>
          </Col3>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario