import React from 'react';
import styled from '@emotion/styled';


const IMGfile = styled.img`
  width: 100%;
`;


const Imagen = ({imagen}) => {

  const {favorites, largeImageURL, likes, previewURL, tags, views} = imagen;

  return (
    <div className="card">
      <IMGfile 
        src={previewURL}
        alt={tags}
      />
      <div className="card-body">
      </div>
    </div>
  );
};

export default Imagen