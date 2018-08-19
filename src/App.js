import React, {Component} from 'react';
import CardList from './CardList';
import './App.css';
import SearchBox from './SearchBox';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        kittens: [],
        searchTerm: ""
      }
      this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event) {
      this.setState({
        searchTerm: event.target.value
      });

    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(people => {
          this.setState(
            {kittens: people}
          )
        })
    }

    render() {

      const filteredKittens = this.state.kittens.filter(kitten => {
        return kitten.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
      });

      return (
        <div className='tc'>
          <h1 className='f1'>Kitten Cards</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList kittens={filteredKittens}/>
        </div>
      );
    }

}

export default App;
