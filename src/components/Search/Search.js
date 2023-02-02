import React from "react";
import "./search.css"
const Search = ({ setSearch }) => {
  return (
    <form
    >
      <input className="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search"
        type="number"
      />
    </form>
  );
};

export default Search;
