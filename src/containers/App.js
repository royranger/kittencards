import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import {setSearchTerm, requestKittens} from '../actions';

const mapStateToProps = (state) => {
  return {
    searchTerm: state.filterKittens.searchTerm,
    kittens: state.requestKittens.kittens,
    isPending: state.requestKittens.isPending,
    error: state.requestKittens.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchTerm(event.target.value)),
    onRequestKittens: () => dispatch(requestKittens())
  }
}


class App extends Component {

componentDidMount() {
  this.props.onRequestKittens();
}

    render() {
      const {searchTerm, onSearchChange, kittens, isPending} = this.props;

      const filteredKittens = kittens.filter(kitten => {
        return kitten.name.toLowerCase().includes(searchTerm.toLowerCase());
      });

      if (isPending) {
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
