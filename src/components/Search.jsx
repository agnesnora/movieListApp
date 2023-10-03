import { MovieContext } from "./Movies";
import { useContext, useState, useEffect } from "react";
import { IoReloadOutline } from "react-icons/io5";
import Message from "./Message";

export default function Search() {
  const [isShown, setIsShown] = useState();
  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, 2000);
    setTimeout(() => {
      setIsShown(false);
    }, 6000);
  }, []);

  const { setMoviesArray, moviesArrayClone, setCurrentPage } =
    useContext(MovieContext);

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
  };

  function search(event) {
    event.preventDefault();

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
  }

  function refresh() {
    setMoviesArray(moviesArrayClone);
    setCurrentPage(1);
  }
  return (
    <div className="search">
      <div className="search--container">
        <form className="form--container" onSubmit={() => onSubmit}>
          <input
            type="search"
            placeholder="Start typing..."
            className="form--input"
            name="searchBar"
            value={searchValue}
            onChange={getInputValue}
          />
          <button type="submit" className="button--search" onClick={search}>
            Search
          </button>
          <button
            type="button"
            className="button--search"
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
      {isShown ? (
        <Message>For more details click on the lines below</Message>
      ) : null}
    </div>
  );
}
