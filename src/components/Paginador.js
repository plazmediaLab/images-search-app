import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1rem;
  justify-content: center;
  margin: 3rem 0 2rem;

  @media (max-width: 589px){
    grid-template-columns: repeat(2, 1fr);
  }
`;


const Paginador = ({paginaactual, guardarPaginaActual, totalpaginas, hayresultados}) => {

  //STATE
  const [disabledprev, guardarDisabledPrev] = useState(false);
  const [disablednext, guardarDisabledNext] = useState(false);

  // useEFFECT
  useEffect(() => {
    const activarDesactivar = () => {
      // Botón Prev
      if (paginaactual === 1 || hayresultados === false) {
        guardarDisabledPrev(true)
      }else{
        guardarDisabledPrev(false)
      }

      // // Botón Next
      if (totalpaginas === 1 || paginaactual === totalpaginas || hayresultados === false) {
        guardarDisabledNext(true);
      }else{
        guardarDisabledNext(false);
      }
    }

    activarDesactivar()

  }, [paginaactual, totalpaginas, hayresultados]);

  // Definir página actual
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;
    if(nuevaPaginaActual === 0) return;
    guardarPaginaActual(nuevaPaginaActual)
  }
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;
    if(nuevaPaginaActual > totalpaginas) return;
    guardarPaginaActual(nuevaPaginaActual)
  }

  return (
    <ContainerGrid>

      <button 
        className="btn btn-s btn-blue"
        onClick={paginaAnterior}
        disabled={disabledprev}
      ><i className="a-angle-left"></i> Prev</button>

      <button 
        className="btn btn-s btn-blue"
        onClick={paginaSiguiente}
        disabled={disablednext}
      >Next <i className="a-angle-right"></i></button>

    </ContainerGrid>
  );
};


Paginador.propTypes = {
  paginaactual: PropTypes.number.isRequired,
  guardarPaginaActual: PropTypes.func.isRequired,
  totalpaginas: PropTypes.number.isRequired,
  hayresultados: PropTypes.bool.isRequired,
}

export default Paginador