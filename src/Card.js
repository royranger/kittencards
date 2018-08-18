import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className='bg-light-pink dib pa3 br3 ma2 grow bw2 shadow-5'>
      <img alt='kitten' src='https://robohash.org/roy?set=set4&size=200x200'/>
      <div>
        <h2>Joy Ranger</h2>
        <p>joy@ranger.com</p>
      </div>
    </div>
  );
}




export default Card;
