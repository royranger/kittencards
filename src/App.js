import React, {Component} from 'react';
import CardList from './CardList';
import './App.css';
import {kittens} from './kittens';
import SearchBox from './SearchBox';


class App extends Component {

    render() {
      return (
        <div className='tc'>
          <h1>Kitten Cards</h1>
          <SearchBox/>
          <CardList kittens={kittens}/>
        </div>
      );
    }

}

export default App;
