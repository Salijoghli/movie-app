import React from "react";

type Props = {
  searchValue: string;
  setSearchValue: (value: string) => void;
  searchMovie: (title: string) => void;
};

const Search = ({ searchValue, setSearchValue, searchMovie }: Props) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    searchMovie(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="search a movie"
        value={searchValue}
        onChange={handleInputChange}
      />
      <img
        src="public/search.png"
        alt="search icon"
        onClick={() => searchMovie(searchValue)}
      />
    </div>
  );
};

export default Search;
