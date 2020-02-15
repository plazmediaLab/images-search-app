import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';

import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';


const ContainerMain = styled.div`
  background-color: var(--gray-background-2);
  padding: 1rem 2rem 2rem;
  
  p{
    text-align: center;
    color: var(--texto-light);
    margin: 0;
    font-weight: 700!important;
  }
  h1{
    color: var(--plaz-light);
    text-align: center;
    margin-top: 0;

    span{
      font-weight: 700;
      font-family: var(--font-1);
    }
    i{
      color: var(--secondary)
    }
  }
`;


function App() {

  // STATE
  const [error, guardarError] = useState(false);
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);

  
  // useEFECT
  useEffect(() => {
    if (busqueda === '') return;

    const consultaAPI = async () => {

      const imagenesPorPagina = 10;
      const key = '15267306-f7d4977593e90dfd66b28ce54';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;
  
      const respuesta = await fetch(url);
      const resultados = await respuesta.json()

      guardarImagenes(resultados.hits)
    };

    consultaAPI();

  }, [busqueda]);

  return (
    <div className="App container">
      <ContainerMain>
        <p><small>Plazmedia</small></p>
        <h1> image<span>FINDER</span> <i className="a-pied-piper-alt af-l i-h-flip"></i></h1>
        <hr />

        <Formulario 
          guardarError={guardarError}
          guardarBusqueda={guardarBusqueda}
        />


      </ContainerMain>

      {error ? <p className="msn msn-s-warning vm-2"><i className="a-info-warning"></i>&nbsp; Write a term to search</p> : null}

      <ListadoImagenes 
        imagenes={imagenes}
      />
      
    </div>
  );
}

export default App;