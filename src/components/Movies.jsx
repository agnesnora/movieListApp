import { useState, createContext, useEffect } from "react";
import movies from "../data/moviesTest.json";

import Title from "./Title";
import Table from "./Table";
import Modal from "./Modal";
import Search from "./Search";
import Pagination from "./Pagination";
import PopUp from "./PopUp";

const MovieContext = createContext();

export default function Movies() {
  const [moviesArrayClone, setMoviesArrayClone] = useState(movies);
  const [moviesArray, setMoviesArray] = useState(movies);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(20);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [isHide, setIsHide] = useState(
    setTimeout(() => true),
    2000
  );
  useEffect(() => {
    setTimeout(() => {
      setIsHide(false);
    }, 5000);
  });

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
  // useEffect(() => {
  //   setMoviesArrayClone(movies);
  // }, []);

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
      <main className="main">
        <div className="main--table--container">
          <Title />
          {/* {isHide ? <PopUp /> : null} */}
          {modalState ? <Modal /> : null}
          <Table />
          <Pagination />
        </div>
      </main>
    </MovieContext.Provider>
  );
}

export { MovieContext };
