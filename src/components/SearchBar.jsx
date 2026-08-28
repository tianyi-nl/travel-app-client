import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex flex-col items-center px-4 py-20 sm:px-6 ">

      <h2 className="mb-2 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
        Where next?
      </h2>
       <p className="mb-[40px]">Search destinations, places, or travel stories</p>

      <div className="w-full max-w-3xl">
        <div className="flex items-center rounded-full border border-gray-300 bg-white p-1.5 shadow-md focus-within:ring-2 focus-within:ring-gray-200">

          <span className="ml-2 mr-2 text-lg text-gray-500 sm:ml-3 sm:mr-3 sm:text-xl">
            
          </span>

          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search for a place or story..."
            aria-label="Search travel plans"
            className="min-w-0 flex-1 bg-transparent px-1 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-500 sm:px-2 sm:text-base"
          />

          <button
            type="button"
            className="shrink-0 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-7 sm:py-3 sm:text-base"
          >
            Search
          </button>

        </div>
      </div>

    </div>
  );
}

export default SearchBar;