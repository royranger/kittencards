import React from 'react';

const Card = ({id, name, zipcode}) => {
  return (
    <div className='bg-light-pink dib pa3 br3 ma2 grow bw2 shadow-5 tc'>
      <img alt='kitten' src={`https://robohash.org/${id}?set=set4&size=200x200`}/>
      <div>
        <h2>{name}</h2>
        <p>{zipcode}</p>
      </div>
    </div>
  );
}




export default Card;
