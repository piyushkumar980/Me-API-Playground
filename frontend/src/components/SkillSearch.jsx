import React, { useState } from 'react';
import { fetchSearchResults } from '../api';

function SkillSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    const data = await fetchSearchResults(query);
    setResults(data);
    setLoading(false);
  };

  return (
    <div className="search-container">
      <h2 className="section-title" style={{ textAlign: 'center' }}>Search Profile Data</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., Node.js, React.js, MongoDB"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="search-results">
        {loading ? (
          <p className="loading-text">Searching...</p>
        ) : results ? (
          <div className="search-result-card">
            <h3>Match Found!</h3>
            <p>Your query matched the profile. You can find more details in the Profile section.</p>
          </div>
        ) : (
          <p className="not-found-text">No profile data found matching that query. Try "React" or "Express".</p>
        )}
      </div>
    </div>
  );
}

export default SkillSearch;