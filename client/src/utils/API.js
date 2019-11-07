// API.js file

import axios from "axios";
require('dotenv').config();

export default {
  getBooks: function(query) {
    var bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + query + '&maxResults=4&orderBy=relevance&key=' + process.env.GOOGLE_BOOKS_API_KEY
    return axios.get(bookUrl);
  }
};