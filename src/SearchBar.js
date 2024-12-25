import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
      <button onClick={handleSearch} style={{ padding: '10px', marginLeft: '10px' }}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
