// API.js file

import axios from "axios";
require('dotenv').config();

const GOOGLE_BOOKS_API_KEY = "AIzaSyDIbflXOLr0kGKCy4Y8Z2heJdvWZmYwGPY";
export default {
  getBooks: function(query) {
    var bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + query + '&maxResults=4&orderBy=relevance&key=' + GOOGLE_BOOKS_API_KEY
    return axios.get(bookUrl);
  }
};