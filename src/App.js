import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';

import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';
import Info from './components/Info';
import Paginador from './components/Paginador';


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
  const [hayresultados, guardarHayResultados] = useState(true);
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(1);

  const [totalresultados, guardarTotalResultados] = useState(0);
  const [totalresultadospixabay, guardarTotalResultadosPixabay] = useState(0);

  
  // useEFECT
  useEffect(() => {
    if (busqueda === '') return;

    const consultaAPI = async () => {

      const imagenesPorPagina = 30;
      const key = '15267306-f7d4977593e90dfd66b28ce54';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;
  
      const respuesta = await fetch(url);
      const resultados = await respuesta.json()

      if(resultados.total < 1){
        guardarHayResultados(false)
      }else{
        guardarHayResultados(true)
      };

      // Resultados de la consulta
      guardarImagenes(resultados.hits)
      
      // Resultados de la consulta
      guardarTotalResultados(resultados.totalHits)
      guardarTotalResultadosPixabay(resultados.total)


      // Calcular total de páginas
      const calcularTotalPaginas = Math.ceil(resultados.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas)

      // Scroll top
      const topView = document.querySelector('#formSearch')
      topView.scrollIntoView({behavior: 'smooth'});
    };
    
    consultaAPI();

  }, [busqueda, paginaactual, totalresultados]);


  return (
    <div className="App container">
      <ContainerMain>
        <p><small><i className="a-imagotype af-l"></i></small></p>
        <h1> image<span>FINDER</span> <i className="a-pied-piper-alt af-l i-h-flip"></i></h1>
        <hr id='formSearch'/>

        <Formulario 
          guardarError={guardarError}
          guardarBusqueda={guardarBusqueda}
        />


      </ContainerMain>

      <Info
        totalresultados={totalresultados}
        totalresultadospixabay={totalresultadospixabay}
        hayresultados={hayresultados}
        busqueda={busqueda}
      />

      {error ? <p className="msn msn-s-warning vm-2"><i className="a-info-warning"></i>&nbsp; Write a term to search</p> : null}

      <ListadoImagenes 
        imagenes={imagenes}
      />
      
      <Paginador 
        paginaactual={paginaactual}
        guardarPaginaActual={guardarPaginaActual}
        totalpaginas={totalpaginas}
        hayresultados={hayresultados}
      />

      <footer className="vm-3">
        <hr />
        <p className="txt-a-c txt-brand-2"><small>Plazmedia & PLAZreset-CSS · Hosted by Pixabay · &copy;2020 Copyright</small></p>
      </footer>

    </div>
  );
}

export default App;