import React from 'react';

const Results = ({ results }) => {
  return (
    <div>
      <h4>Search Results:</h4>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>Name:</strong> {result.name} <br />
              <strong>Country:</strong> {result.country} <br />
              <strong>Website:</strong>{' '}
              <a
                href={result.web_pages ? result.web_pages[0] : '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {result.web_pages ? result.web_pages[0] : 'N/A'}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found. Try a different search.</p>
      )}
    </div>
  );
};

export default Results;
