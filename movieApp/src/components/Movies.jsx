import { useState, createContext, useEffect } from "react";
import movies from "../data/movies.json";

import Title from "./Title";
import Table from "./Table";
import Modal from "./Modal";
import Search from "./Search";

const MovieContext = createContext();

export default function Movies() {
  const [moviesArray, setMoviesArray] = useState(movies);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [modalState, setModalState] = useState(false);

  function getMovieDetail(e) {
    setSelectedMovie(
      moviesArray.filter((movie) => movie.Id == e.target.dataset.select)[0]
    );
    setModalState(true);
  }

  function closeModal() {
    setModalState(false);
  }

  return (
    <MovieContext.Provider
      value={{
        moviesArray,
        getMovieDetail,
        selectedMovie,
        closeModal,
        setMoviesArray,
      }}
    >
      <Search />
      <Title />
      {modalState ? <Modal /> : null}
      <Table />
    </MovieContext.Provider>
  );
}

export { MovieContext };
