// Lightbox.js
import React from 'react';
import './LightBox.css'; // Create this CSS file for styling

const Lightbox = ({ isOpen, onClose, src, alt }) => {
  if (!isOpen) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img src={src} alt={alt} className="lightbox-image" />
        <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
