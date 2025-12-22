import React from 'react';
import "./ImageContainer.css";

const ImageContainer = ({ imageSource, description }) => {
    return (
        <div className='image-container'>
            <img className="image" src={imageSource} alt="it probably broke" />
            <p className="date">{description}</p>
        </div>
    );
};

export default ImageContainer