import React from 'react';
import styled from '@emotion/styled';

import Imagen from './Imagen';


const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1rem 0;

  @media (max-width: 786px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 589px){
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ListadoImagenes = ({ imagenes }) => {
  return (
    <ContainerGrid>
      {imagenes.map(imagen => (
        <Imagen 
          key={imagen.id}
          imagen={imagen}
        />
      ))}
    </ContainerGrid>
  );
};

export default ListadoImagenes