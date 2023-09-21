import { useState, createContext, useEffect } from "react";
import movies from "../data/moviesTest.json";

import Title from "./Title";
import Table from "./Table";
import Modal from "./Modal";
import Search from "./Search";

const MovieContext = createContext();

export default function Movies() {
  const [moviesArrayClone, setMoviesArrayClone] = useState([]);
  const [moviesArray, setMoviesArray] = useState(movies);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function getMovieDetail(e) {
    setSelectedMovie(
      moviesArray.filter((movie) => movie.Id == e.target.dataset.select)[0]
    );
    setMoviesArray(moviesArrayClone);
    setModalState(true);
  }

  function closeModal() {
    setModalState(false);
  }
  useEffect(() => {
    setMoviesArrayClone(movies);
  }, []);
  // function getInputValue(event) {
  //   setSearchValue(event.target.value);
  // }

  // function deleteSearch() {
  //   setSearchValue("");
  //   setMoviesArray(movies);
  // }

  // function search() {
  //   const searchedMovieArray = moviesArray.filter((film) => {
  //     if (
  //       film.Title &&
  //       film.Title.toString()
  //         .toLowerCase()
  //         .includes(searchValue.toLocaleLowerCase())
  //     ) {
  //       return film;
  //     }
  //   });
  //   setMoviesArray(searchedMovieArray);
  //   console.log("search", moviesArray);
  // }
  return (
    <MovieContext.Provider
      value={{
        moviesArray,
        getMovieDetail,
        selectedMovie,
        closeModal,
        setMoviesArray,
        searchValue,
        setSearchValue,
        moviesArrayClone,
      }}
    >
      <Search />
      {/* <Search>
        <div>
          <div className="form--container">
            <input
              type="search"
              placeholder="Start typing..."
              className="form--input"
              name="searchBar"
              value={searchValue}
              onChange={setSearchValue}
            />
            <button
              className="form--button--search"
              onClick={() => console.log(searchValue)}
            >
              Search
            </button>
            <button className="form--button--clear">Delete search</button>
          </div>
        </div>
      </Search> */}
      <Title />
      {modalState ? <Modal /> : null}
      <Table />
    </MovieContext.Provider>
  );
}

export { MovieContext };
