import React, { useEffect, useRef } from 'react';

export default function SearchForm({ search, setSearch, handleSearch }) {

  const onSearch = (event) => {
    event.preventDefault();
    handleSearch(search);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current)
      inputRef.current.focus()
  }, [])

  return (
    <form onSubmit={onSearch} className="flex items-center gap-2 p-4">
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Search drinks..."
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded"
      >
        Search
      </button>
    </form>
  );
}
