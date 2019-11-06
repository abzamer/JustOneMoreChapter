//SearchForm component

import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    // <form className="search">
    //   <div className="form-group">
    //     <label htmlFor="book">Search this Book:</label>
    //     <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter book title here">
    //     </input>
    //   </div>
    // </form>

    <div className="input-group input-group-lg">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}
                    
                    
export default SearchForm;