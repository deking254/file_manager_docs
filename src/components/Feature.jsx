// Card.jsx
import React from 'react';
import '../css/Feature.css'; // Import the CSS file

const Feature = ({ title, image, description }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default Feature;