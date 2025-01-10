import React from 'react';
import './DetailShopping.css';

function DetailShopping({ mall, onClose }) {
    return (
        <div className="modal-overlay" style={{display: mall ? 'block' : 'none'}}>
            <div className="modal-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>{mall.name}</h2>
                <p><strong>Operating Hours:</strong> {mall.hours}</p>
                <p><strong>Address:</strong> {mall.address}</p>

                <h3>Gallery</h3>
                <div className="gallery">
                    {mall.gallery && mall.gallery.length > 0 ? (
                        mall.gallery.map((img, index) => (
                            <img key={index} src={img} alt={`${mall.name} ${index + 1}`}/>
                        ))
                    ) : (
                        <p>No images available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DetailShopping;