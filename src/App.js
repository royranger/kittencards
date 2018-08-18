import React, {Component} from 'react';
import Card from './Card';
import './App.css';
import kittens from './kittens';

class App extends Component {

    render() {
      return (
        <div>
          <Card/>
          <Card/>
        </div>
      );
    }


}

export default App;
