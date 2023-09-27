import { useState, createContext, useEffect } from "react";
import movies from "../data/moviesTest.json";

import Title from "./Title";
import Table from "./Table";
import Modal from "./Modal";
import Search from "./Search";
import Pagination from "./Pagination";

const MovieContext = createContext();

export default function Movies() {
  const [moviesArrayClone, setMoviesArrayClone] = useState([]);
  const [moviesArray, setMoviesArray] = useState(movies);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(20);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [modalState, setModalState] = useState(false);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = moviesArray.slice(indexOfFirstMovie, indexOfLastMovie);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }
  function getMovieDetail(e) {
    setSelectedMovie(
      moviesArrayClone.filter((movie) => movie.Id == e.target.dataset.select)[0]
    );

    console.log(selectedMovie.Title);
    // setMoviesArray(moviesArray);

    setModalState(true);
  }

  function closeModal() {
    setModalState(false);
    setSelectedMovie("");
  }
  useEffect(() => {
    setMoviesArrayClone(movies);
  }, []);

  return (
    <MovieContext.Provider
      value={{
        moviesArray,
        getMovieDetail,
        selectedMovie,
        setSelectedMovie,
        closeModal,
        setMoviesArray,
        moviesArrayClone,
        currentMovies,
        currentPage,
        setCurrentPage,
        moviesPerPage,
        paginate,
      }}
    >
      <Search />
      <div className="main--table--container">
        <Title />
        {modalState ? <Modal /> : null}
        <Table />
        <Pagination />
      </div>
    </MovieContext.Provider>
  );
}

export { MovieContext };
