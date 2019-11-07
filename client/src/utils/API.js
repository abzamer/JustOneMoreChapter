// API.js file

import axios from "axios";
require('dotenv').config();

export default {
  getBooks: function(query) {

    var bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + query + process.env.GOOGLE_BOOKS_API_KEY;
    console.log(bookUrl);
    return axios.get(bookUrl);
  }
};