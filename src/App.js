import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureItem from './CreatureItem';
import creatures from './creatures';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />

        <main>
          <CreatureItem creatures={creatures} />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
