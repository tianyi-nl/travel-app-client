import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="SearchBar">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by destination or traveller"
        aria-label="Search travel plans"
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "0.75rem 1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "1rem",
        }}
      />
    </div>
  );
}

export default SearchBar;