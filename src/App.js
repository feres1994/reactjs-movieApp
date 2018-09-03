import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navi from './nav';
import MovieList from './movieList'

class App extends Component {
  render() {
    return (
      <div className="App">
     <Navi />
     <MovieList />
      </div>
    );
  }
}

export default App;
