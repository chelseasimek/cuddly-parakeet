import React from 'react';

const Badge = ({ status, children }) => {
  return (
    <div className={ `Badge ${status}` }>
      {children}
    </div> 
  );
};

export default Badge; 