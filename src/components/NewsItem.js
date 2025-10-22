import React from 'react';

const NewsItem = ({ title, description, imageUrl, newsUrl, date, category }) => {
  return (
    <div className="my-3 position-relative">
      <div className={`badge position-absolute top-0 end-0 m-2 ${category?.toLowerCase() || 'general'}`}>
        {category ? category.toUpperCase() : 'GENERAL'}
      </div>
      <div className="card">
        <img
          src={imageUrl || "https://via.placeholder.com/400x200.png?text=No+Image"}
          className="card-img-top"
          alt="news"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">Last updated on {new Date(date).toGMTString()}</small>
          </p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
