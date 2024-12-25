import React, { useState } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import Results from './ Results';



const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const baseUrl = 'http://universities.hipolabs.com/search';
  
      // Construct query parameters dynamically
      const params = new URLSearchParams();
      
      if (searchQuery) {
        // Check if search query looks like a country or name (example logic)
        if (/^[a-zA-Z\s]+$/.test(searchQuery)) {
          params.append('country', searchQuery);
        } else {
          params.append('name', searchQuery);
        }
      }
  
      // Construct the full URL
      const url = `${baseUrl}?${params.toString()}`;
  
      console.log('API URL:', url); // Debugging the constructed URL
  
      // Make the API call
      const response = await axios.get(url);
  
      // Update results state with the fetched data
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setResults([]);
    }
  };
  

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search App</h1>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <Results results={results} />
    </div>
  );
};

export default App;
