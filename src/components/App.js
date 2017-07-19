import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter';

// const App = () => <FruitBasket />;

class App extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    fruit: [],
    filters: [],
    currentFilter: null
  }

    this.fetchFilters = this.fetchFilters.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit }));
  }

  updateFilter(e) {
    console.log('update filter to: ', e.target.value);
    this.setState({ currentFilter: e.target.value });
  }



render() {
  return <div>
  <FruitBasket fruit={this.state.fruit} 
  filters={this.state.filters} 
  currentFilter={this.state.currentFilter}
  updateFilterCallback={this.updateFilter}/>
  </div>
}



}

export default App;
