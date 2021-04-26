import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import creatures from './creatures';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />

        <main>
          <CreatureList creatures={creatures} />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
