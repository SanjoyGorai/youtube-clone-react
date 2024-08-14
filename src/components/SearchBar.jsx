import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
const suggestions = [
    'React',
    'React Native',
    'Redux',
    'JavaScript',
    'Tailwind CSS',
    'TypeScript',
    'Node.js',
    'Express.js',
];

function SearchBar() {
    const [query, setQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value) {
            const filtered = suggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
        } else {
            setFilteredSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setFilteredSuggestions([]);
    };

    return (
        <div className="relative w-full max-w-2xl">
            <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-gray-500"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-gray-100 border-l border-gray-300 rounded-r-full hover:bg-gray-200">
                <CiSearch className='size-6 ' />
            </button>

            {filteredSuggestions.length > 0 && (
                <ul className="absolute top-full left-0 w-full bg-pink-100 border border-gray-300 rounded-md shadow-lg mt-1 z-10">
                    {filteredSuggestions.map((suggestion) => (
                        <li
                            key={suggestion}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBar;
