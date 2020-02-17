import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const ContainerDiv = styled.div`
  font-size: 1.5rem;
  background-color: var(--gray-background-2);
  padding: .8em 1.2em;
  border: .1rem solid var(--gray-background-2);
  margin: 1rem 0;
  display: block;
  color: var(--texto-light);

  > * {
    margin: 0;
  }
  p{
    text-align: center;
  }
  p span{
    font-weight: 700;
  }
  p *{
    color: inherit;
  }
`;



const Info = ({totalresultados, totalresultadospixabay, hayresultados, busqueda}) => {

  const contenido = (!totalresultados) 
    ? <p>Results of <span>Pixabay</span>, Its image bank has more than 1,600943 million images shared by the community and its talent.</p>
    : <p className="txt-a-l"><span>{totalresultados}</span> Results found available | <span>{totalresultadospixabay}</span> Results available on Pixabay - <a href="https://pixabay.com/es/">go to their page</a></p>;

  return (
    <Fragment>
      <ContainerDiv>
        {contenido}
      </ContainerDiv>

      {(!hayresultados) ? <p className="msn msn-s-cancel"><i className="a-chrome-dino">&nbsp; </i>No results were found with the search "{busqueda}"</p> : null} 
    </Fragment>
  );
};

Info.propTypes = {
  totalresultados: PropTypes.number.isRequired,
  totalresultadospixabay: PropTypes.number.isRequired,
  hayresultados: PropTypes.bool.isRequired,
  busqueda: PropTypes.string.isRequired,
}

export default Info