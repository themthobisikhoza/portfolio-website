import React from 'react';
import "./ImageContainer.css";

const ImageContainer = ({ imageSource, title, subtitle, date }) => {
    return (
        <div className="image-container">
            <img className="image" src={imageSource} alt={title} />

            <div className="text-content">
                <h3 className="title">{title}</h3>
                <h4 className="subtitle">{subtitle}</h4>
                <p className="date">{date}</p>
            </div>
        </div>
    );
};

export default ImageContainer;
