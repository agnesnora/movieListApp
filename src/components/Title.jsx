import { MovieContext } from "./Movies";
import { useContext, useState } from "react";
import { BsSortAlphaDown, BsSortNumericDownAlt } from "react-icons/bs";
export default function Title() {
  const [isTitleHovering, setIsTitleHovering] = useState(false);
  const [isRatingHovering, setIsRatingHovering] = useState(false);
  const handleMouseOverTitle = () => {
    setIsTitleHovering(true);
  };
  const handleMouseOverRating = () => {
    setIsRatingHovering(true);
  };
  const handleMouseOutTitle = () => {
    setIsTitleHovering(false);
    setIsRatingHovering(false);
  };
  const handleMouseOutRating = () => {
    setIsRatingHovering(false);
  };
  const { setMoviesArray, moviesArray } = useContext(MovieContext);

  function sortByTitle() {
    setMoviesArray(sort(moviesArray, "Title"));
  }

  function sortByGenre() {
    setMoviesArray(sort(moviesArray, "Major_Genre"));
  }
  function sortByRating() {
    setMoviesArray(sort(moviesArray, "IMDB_Rating", "descending"));
  }

  // function sort(arr, propertyName, order = "ascending") {
  //   const sortedArr = [...arr].sort((a, b) => {
  //     if (a[propertyName] < b[propertyName]) {
  //       return -1;
  //     }
  //     if (a[propertyName] > b[propertyName]) {
  //       return 1;
  //     }
  //     return 0;
  //   });

  //   if (order === "descending") {
  //     return sortedArr.reverse();
  //   }

  //   return sortedArr;
  // }
  function sort(arr, propertyName, order = "ascending") {
    const sortedArr = [...arr].sort((a, b) => {
      if (a[propertyName] == null || a[propertyName] < b[propertyName]) {
        return -1;
      }
      if (b[propertyName] == null || a[propertyName] > b[propertyName]) {
        return 1;
      }
      return 0;
    });

    if (order === "descending") {
      return sortedArr.reverse();
    }

    return sortedArr;
  }

  return (
    <div>
      <div className="table--container--firstline">
        <div className=" movie--table--title">
          <h2
            onClick={sortByTitle}
            onMouseOver={handleMouseOverTitle}
            onMouseOut={handleMouseOutTitle}
            className="title--sort"
          >
            Title
            {isTitleHovering ? (
              <BsSortAlphaDown className="sort--icon" />
            ) : null}
          </h2>
          <h2>Duration</h2>
          <h2>Release date</h2>
          <h2
            onClick={sortByRating}
            onMouseOver={handleMouseOverRating}
            onMouseOut={handleMouseOutRating}
            className="title--sort"
          >
            Rating{" "}
            {isRatingHovering ? (
              <BsSortNumericDownAlt className="sort--icon" />
            ) : null}
          </h2>
          <h2 className="title--sort" onClick={sortByGenre}>
            Genre
          </h2>
        </div>
        <div className="delete--title--first">
          <h2>Delete</h2>
        </div>
      </div>
    </div>
  );
}
