import React, { Component } from 'react';
import './App.css';
import SearchForm from "./Components/SearchForm/SearchForm";
import Navbar from "./Components/Nav";
import Jumbotron from "./Components/Jumbotron";

class App extends Component {
  render() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <SearchForm />
    </div>
  );
}
}

export default App;
