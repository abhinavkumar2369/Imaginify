// import React from 'react';
import './Image.css';

function Image({ url, description, downloadUrl }) {
    return (
        <div className="image-container">
            <img src={url} alt={description} className="image" />
            <div className="image-overlay">
                <p className="image-description">{description}</p>
                <a href={downloadUrl} className="download-button" download target="_blank" rel="noopener noreferrer">
                    Download Image
                </a>
            </div>
        </div>
    );
}

export default Image;