import React from 'react';
import Badge from '../Badge';

const Card = ({ image, names, toxicity }) => {
  const isToxicStr = toxicity ? 'Toxic' : 'Non-toxic';
  return (
    <div className="Card">
      <img src={ process.env.PUBLIC_URL + image }></img>
      <div className="metadata">
        <h3>{ names.common }</h3>
        <Badge status={ isToxicStr.toLowerCase() } >{ isToxicStr }</Badge>
        <input type="checkbox" id="favorite" name="favorite" value="favorite"></input>
      </div>
    </div> 
  );
};

export default Card; 