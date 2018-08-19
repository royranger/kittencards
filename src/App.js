import React, {Component} from 'react';
import CardList from './CardList';
import './App.css';
import {kittens} from './kittens';
import SearchBox from './SearchBox';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        kittens: kittens,
        searchTerm: ""
      }
      this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event) {
      this.setState({
        searchTerm: event.target.value
      });
    }

    render() {
      return (
        <div className='tc'>
          <h1>Kitten Cards</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList kittens={this.state.kittens}/>
        </div>
      );
    }

}

export default App;
