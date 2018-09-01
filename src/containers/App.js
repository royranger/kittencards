import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import {setSearchTerm} from '../actions';

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchTerm(event.target.value))
  }
}


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        kittens: [],
      }
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
      const {kittens} = this.state;
      const {searchTerm, onSearchChange} = this.props;

      const filteredKittens = kittens.filter(kitten => {
        return kitten.name.toLowerCase().includes(searchTerm.toLowerCase());
      });

      if (!kittens.length) {
        return <h1 className='tc'>Loading...</h1>
      } else {
        return (
          <div className='tc'>
            <h1 className='f1'>Kitten Cards</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
              <ErrorBoundary>
                <CardList kittens={filteredKittens}/>
              </ErrorBoundary>
            </Scroll>
          </div>
        );
      }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
