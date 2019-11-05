import React, { Component } from 'react';
import './App.css';
import SearchForm from "./Components/SearchForm/SearchForm";
import Button from "./Components/Button";
import Navbar from "./Components/Nav";
import Jumbotron from "./Components/Jumbotron";

class App extends Component {
  render() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <SearchForm />
      <Button />
    </div>
  );
}
}

export default App;
