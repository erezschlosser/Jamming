import React, { useState } from "react";
import './search.css';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() && typeof onSearch === "function") {
      onSearch(query);
      setQuery(""); // Clear input field after search
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for videos..."
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}


