import React from 'react';
import './Card.scss';

const Card = ({ track }) => {
  return (
    <div className="card">
      <div className="card-media">
        <img src={track.coverUrl} alt="" />
      </div>
      <div className="card-content">
        <h2 className="title">{track.country}</h2>
        <span className="date">{track.date}</span>
      </div>
    </div>
  );
};

export default Card;
