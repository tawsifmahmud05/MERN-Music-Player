import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import music from "../assets/music.png";

import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <>
      <div className="p-5 flex flex-row	justify-start items-center">
        <figure onClick={() => navigate(`/`)}>
          <img
            src={music}
            alt="logo"
            className="grid-cols-1 w-14 h-20 object-contain"
          />
        </figure>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="grid-cols-1 pl-5 pr-5 text-gray-400 focus-within:text-gray-600 w-full"
        >
          <label htmlFor="search-field" className="sr-only">
            Search all files
          </label>
          <div className="flex flex-row justify-start items-center bg-white/5 rounded-xl animate-slideup">
            <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
            <input
              name="search-field"
              autoComplete="off"
              id="search-field"
              className="flex-1 bg-transparent border-none placeholder-gray-200 outline-none text-base text-white p-4"
              placeholder="Search..."
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Searchbar;
