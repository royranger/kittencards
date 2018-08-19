import React from 'react';

const Scroll = ({children}) => {

  const height = (window.innerHeight - 200);
  
  return(
    <div style={{overflowY: 'scroll', border: '1px solid grey', height: `${height}px`}}>
      {children}
    </div>
  );
};

export default Scroll;
