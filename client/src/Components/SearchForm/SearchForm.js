//SearchForm component

import React from "react";
import "./style.css";

function SearchForm() {
  return (
    <form className="search">
      <div className="form-group">
        <label for="book">Search this Book:</label>
        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter book title here">
        </input>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  );
}
                    
                    
export default SearchForm;