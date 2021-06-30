import React from 'react';
import './Card.css';
import Badge from '../Badge';

const Card = ({ image, names, toxicity }) => {
  const isToxicStr = toxicity ? 'Toxic' : 'Non-toxic';
  return (
    <div className="Card">
      <div className="backgroundImg"  style={ { backgroundImage: `url(${process.env.PUBLIC_URL + image})` } }></div>
      <div className="metadata">
        <h3>{ names.common }</h3>
        <div className="action">
          <Badge status={ isToxicStr.toLowerCase() } >{ isToxicStr }</Badge>
          <input type="checkbox" id="favorite" name="favorite" value="favorite"></input>
        </div>
      </div>
    </div> 
  );
};

export default Card; 