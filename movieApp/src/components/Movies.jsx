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

  return (
    <MovieContext.Provider
      value={{
        moviesArray,
        getMovieDetail,
        selectedMovie,
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

      <Title />
      {modalState ? <Modal /> : null}
      <Table />
      <Pagination />
    </MovieContext.Provider>
  );
}

export { MovieContext };
