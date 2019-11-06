import React, { Component } from 'react';
import SearchForm from "./components/SearchForm";
import Navbar from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Button from "./components/Button";
import API from "./utils/API";

class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
    .then(res => this.setState({ books: res.data }))
    .catch(err => console.log(err));
  }

  render() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <SearchForm
        name="bookSearch"
        value={this.state.bookSearch}
        onChange={this.handleInputChange}
        placeholder="Search For a Book"
      />
      <Button 
      onClick={this.handleFormSubmit}
      type="success"
      className="input-lg"
    >
      Search
    </Button>
    </div>
  );
}
}

export default App;
