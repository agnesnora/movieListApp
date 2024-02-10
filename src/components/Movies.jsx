import { useState, createContext } from "react";
import movies from "../data/movies.json";
import Title from "./Title";
import Table from "./Table";
import Modal from "./Modal";
import Search from "./Search";
import Pagination from "./Pagination";
import "../styles/Movies/Movies.css";

const MovieContext = createContext();

export default function Movies() {
  const [moviesArrayClone] = useState(movies);
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

    setModalState(true);
  }

  function closeModal() {
    setModalState(false);
    setSelectedMovie("");
  }

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

          {modalState ? <Modal /> : null}
          {moviesArray.length == 0 ? (
            <div className="no--result">
              <h3>Your search has no results. Try again.</h3>
            </div>
          ) : (
            <Table />
          )}
          <Pagination />
        </div>
      </main>
    </MovieContext.Provider>
  );
}

export { MovieContext };
