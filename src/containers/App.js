import React, {Component} from 'react';
import CardList from '../components/CardList';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'


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
      const {kittens, searchTerm} = this.state;

      const filteredKittens = kittens.filter(kitten => {
        return kitten.name.toLowerCase().includes(searchTerm.toLowerCase());
      });

      if (!kittens.length) {
        return <h1 className='tc'>Loading...</h1>
      } else {
        return (
          <div className='tc'>
            <h1 className='f1'>Kitten Cards</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <CardList kittens={filteredKittens}/>
            </Scroll>
          </div>
        );
      }

    }

}

export default App;
