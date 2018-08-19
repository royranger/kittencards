import React from 'react';

const SearchBox = ({searchChange}) => {
  return(
    <div className='pa2'>
      <input
        className='pa3 ba b--pink bg-light-yellow'
        type='search'
        placeholder='search kittens'
        onChange={searchChange}/>
    </div>
  );
}

export default SearchBox;
