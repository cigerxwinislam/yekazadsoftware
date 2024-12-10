// Bismillahirahmanirahim



import React from "react";

export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
  
    const handleChange = e => {
      setSearchTerm(e.target.value);
    };
  
    return (
      <div>
        <input
          onChange={handleChange}
          type="search"
          placeholder="Ara....."
          value={searchTerm}
        />
      </div>
    );
  };