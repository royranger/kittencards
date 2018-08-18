import React, {Component} from 'react';
import CardList from './CardList';
import './App.css';
import {kittens} from './kittens';


class App extends Component {

    render() {
      return (
        <div>
          <CardList kittens={kittens}/>
        </div>
      );
    }

}

export default App;
