import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import CreatureSearch from './CreatureSearch';
//import creatureData from './creatures';
import request from 'superagent';
import './App.css';

const CREATURES_API = 'https://lab-06-heroku-repo.herokuapp.com/api/creatures';

class App extends Component {

  state = {
    creatures: []
  }

  async fetchCreature() {
    const response = await request
      .get(CREATURES_API);
    this.setState({ creatures: response.body });
  }

  async componentDidMount() {
    this.fetchCreature();
  }

  handleSearch = ({ nameFilter, sortField }) => {

    const nameRegex = new RegExp(nameFilter, 'i');

    const searchedData = this.state.creatures
      .filter(creature => {
        return !nameFilter || creature.title.match(nameRegex);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ creatures: searchedData });
  }

  render() {

    const { creatures } = this.state;

    return (
      <div className="App">

        <Header />
        <CreatureSearch onSearch={this.handleSearch} />

        <main>
          <CreatureList creatures={creatures} />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
