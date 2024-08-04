import React from 'react';
import './Card.css';

function Card({ image, title, name, email }) {
    const imageUrl = `http://localhost:5000${image}`; // Construct the full URL for the image

    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-name">{name}</p>
                <p className="card-email">{email}</p>
            </div>
        </div>
    );
}

export default Card;
