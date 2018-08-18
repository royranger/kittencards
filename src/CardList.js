import React from 'react';
import Card from './Card';


const CardList = ({kittens}) => {

  return(
    <div>
      {
        kittens.map((kitten, i) => {
          return (
            <Card
              id={kitten.id}
              name={kitten.name}
              email={kitten.email}
              key={i}/>
          )
        })
      }
    </div>
  );
}

export default CardList;
