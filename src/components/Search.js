import React from "react";

function Search({searchTerm, setSearchTerm}) {

  
  const handleSearch = (event) => {
  const  newSearchTerm = event.target.value;
  setSearchTerm(newSearchTerm);
  
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value = {searchTerm}
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
