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
  const { setMoviesArray, moviesArrayClone } = useContext(MovieContext);

  function sortByTitle() {
    setMoviesArray(sort(moviesArrayClone, "Title"));
  }

  function sortByGenre() {
    setMoviesArray(sort(moviesArrayClone, "Major_Genre"));
  }
  function sortByRating() {
    setMoviesArray(sort(moviesArrayClone, "IMDB_Rating", "descending"));
  }

  function sort(arr, propertyName, order = "ascending") {
    const sortedArr = [...arr].sort((a, b) => {
      if (a[propertyName] < b[propertyName]) {
        return -1;
      }
      if (a[propertyName] > b[propertyName]) {
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
          >
            Title
            {isTitleHovering ? <BsSortAlphaDown className="sortIcon" /> : null}
          </h2>
          <h2>Duration</h2>
          <h2>Release date</h2>
          <h2
            onClick={sortByRating}
            onMouseOver={handleMouseOverRating}
            onMouseOut={handleMouseOutRating}
          >
            Rating{" "}
            {isRatingHovering ? (
              <BsSortNumericDownAlt className="sortIcon" />
            ) : null}
          </h2>
          <h2 onClick={sortByGenre}>Genre</h2>
        </div>
        <div className="delete--title--first">
          <h2>Delete</h2>
        </div>
      </div>
    </div>
  );
}
