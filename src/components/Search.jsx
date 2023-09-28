import { MovieContext } from "./Movies";
import { useContext, useState, useEffect } from "react";
import { IoReloadOutline, IoSearch } from "react-icons/io5";

export default function Search() {
  const [activeSearch, setActiveSearch] = useState(false);
  const {
    moviesArray,
    setMoviesArray,
    moviesArrayClone,
    currentPage,
    setCurrentPage,
  } = useContext(MovieContext);
  useEffect(() => {
    setMoviesArray[moviesArray];
  });
  const [searchValue, setSearchValue] = useState("");
  function getInputValue(event) {
    setSearchValue(event.target.value);
  }

  function deleteSearch() {
    setSearchValue("");
    setMoviesArray(moviesArrayClone);
    setCurrentPage(1);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };

  function search(event) {
    event.preventDefault();
    setActiveSearch(true);
    // const searchedMovieArray = moviesArray.filter((film) => {
    //   if (
    //     film.Title &&
    //     film.Title.toString()
    //       .toLowerCase()
    //       .includes(searchValue.toLocaleLowerCase())
    //   ) {
    //     return film;
    //   }
    // });
    setMoviesArray(
      moviesArrayClone.filter((film) => {
        if (
          film.Title &&
          film.Title.toString()
            .toLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        ) {
          return film;
        }
      })
    );

    // console.log("search után moviesARray ", moviesArray);
  }

  function refresh() {
    setMoviesArray(moviesArrayClone);
    setCurrentPage(1);
  }
  return (
    <div className="search--container">
      <form className="form--container" onSubmit={() => onSubmit}>
        <input
          type="search"
          placeholder="Start typing..."
          className="form--input"
          name="searchBar"
          value={searchValue}
          onChange={getInputValue}

          // onKeyUp={(e) => {
          //   if (e.key === "Enter") {
          //     e.preventDefault() && search;
          //   }
          // }}
        />
        <button type="submit" className="button--search" onClick={search}>
          Search
        </button>
        <button
          type="button"
          className="button--search"
          onSubmit={() => false}
          onClick={deleteSearch}
        >
          Delete search
        </button>
      </form>
      <div>
        <button type="button" className="button--search" onClick={refresh}>
          Reload
          <IoReloadOutline />
        </button>
      </div>
    </div>
  );
}
