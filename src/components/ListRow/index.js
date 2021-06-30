import React from 'react';
import Badge from '../Badge';

const ListRow = ({ image, names, toxicity, details }) => {
  const isToxicStr = toxicity ? 'Toxic' : 'Non-toxic';
  return (
    <div className="ListRow">
      <img src={ process.env.PUBLIC_URL + image }></img>
      <div className="title">
        <h3>{names.common}</h3>
        <h5>{names.scientific}</h5>
      </div>
      <div className="details">
        <p>{details}</p>
      </div>
      <Badge status={ isToxicStr.toLowerCase() } >{ isToxicStr }</Badge>
      <input type="checkbox" id="favorite" name="favorite" value="favorite"></input>
    </div>
  );
};

export default ListRow;