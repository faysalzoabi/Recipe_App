import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Recipes from './components/Recipes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Search/>
        <Recipes/>  
      </div>
    );
  }
}

export default App;
