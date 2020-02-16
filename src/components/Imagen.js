import React from 'react';


const Imagen = ({imagen}) => {

  const {favorites, largeImageURL, likes, previewURL, views, imageHeight, imageWidth} = imagen;

  return (
    <div className="card-image">
      <div className="card-image-top">
        <img 
          src={previewURL}
          alt={largeImageURL}
        />
        <h3 className="image-title">Preview</h3>
      </div>
      <div className="card-image-body">
        <div className="card-stats">
          <span className="tag tag-c tag-gray">Size: {imageWidth}px {imageHeight}px</span>
          <span className="tag tag-c tag-gray">{likes} Likes</span>
          <span className="tag tag-c tag-gray">{favorites} Favorites</span>
          <span className="tag tag-c tag-gray">{views} Views</span>
        </div>
        <a href="#!" className="card-image-btn"><i className="a-plus"></i></a>
        <hr />
      </div>
      <div className="card-image-footer">
        <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-br btn-interactive btn-empty-blue">View image <i className="a-link-line af-m"></i></a>
      </div>
    </div>
  );
};

export default Imagen