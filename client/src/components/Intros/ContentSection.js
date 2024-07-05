import React from 'react';

const ContentSection = ({ src, alt, title, content }) => {
  return (
    <div className="container">
      <div className="illustration">
        <img src={src} alt={alt} />
      </div>
      <div className="content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ContentSection;
