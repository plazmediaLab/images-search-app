import React from 'react';
import styled from '@emotion/styled';


const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1rem;
  justify-content: center;

  @media (max-width: 589px){
    grid-template-columns: repeat(2, 1fr);
  }
`;


const Paginador = ({paginaactual, guardarPaginaActual, totalpaginas}) => {

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
      ><i className="a-angle-left"></i> Prev</button>
      <button 
        className="btn btn-s btn-blue"
        onClick={paginaSiguiente}
      >Next <i className="a-angle-right"></i></button>
    </ContainerGrid>
  );
};

export default Paginador