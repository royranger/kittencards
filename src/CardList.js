import React from 'react';
import Card from './Card';


const CardList = ({kittens}) => {

  const cardArray = kittens.map((kitten, i) =>
     <Card id={kitten.id} name={kitten.name} email={kitten.email} key={i}/> );

  return(
    <div>
      {cardArray}
    </div>
  );
}

export default CardList;
