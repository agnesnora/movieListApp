import Title from "./Title";
import { useContext, useState } from "react";
import { MovieContext } from "./Movies";

export default function Table() {
  const {
    moviesArray,
    setMoviesArray,
    getMovieDetail,
    moviesArrayClone,
    // setSearchValue,
    // searchValue,
  } = useContext(MovieContext);
  // const [listedMovies, setListedMovies] = useState(moviesArray);

  function deleteLine(e) {
    const id = e.target.dataset.delete;

    setMoviesArray((prevListedMovies) =>
      prevListedMovies.filter((movie) => movie.Id != id)
    );
  }

  return (
    <>
      {moviesArray.map((item) => {
        return (
          <div key={item.Id} className="table--container">
            <div
              className="movie--table"
              data-select={item.Id}
              onClick={getMovieDetail}
            >
              {" "}
              <h2 className="movie--column" data-select={item.Id}>
                {item.Title}{" "}
              </h2>
              <h2 className="movie--column" data-select={item.Id}>
                {item.Running_Time_min}
              </h2>
              <h2 className="movie--column" data-select={item.Id}>
                {item.Release_Date}
              </h2>
              <h2 className="movie--column" data-select={item.Id}>
                {item.IMDB_Rating ? item.IMDB_Rating : "-"}
              </h2>
              <h2 className="movie--column" data-select={item.Id}>
                {item.Major_Genre ? item.Major_Genre : "Not available"}
              </h2>
            </div>
            <div data-delete={item.Id}>
              <button data-delete={item.Id} onClick={deleteLine}>
                Delete line
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

// export default function Table() {
//   const { moviesArray, getMovieDetail, setMoviesArray } =
//     useContext(MovieContext);
//   // const [listedMovies, setListedMovies] = useState(moviesArray);

//   function deleteLine(e) {
//     const id = e.target.dataset.delete;

//     setMoviesArray((prevListedMovies) =>
//       prevListedMovies.filter((movie) => movie.Id != id)
//     );
//   }

//   function refresh() {
//     setMoviesArray(moviesArray);
//   }
//   return (
//     <>
//       <div>
//         <button onClick={refresh}>Reload</button>
//       </div>
//       {moviesArray.map((item) => {
//         return (
//           <div key={item.Id} className="table--container">
//             <div
//               className="movie--table"
//               data-select={item.Id}
//               onClick={getMovieDetail}
//             >
//               {" "}
//               <h2 className="movie--column" data-select={item.Id}>
//                 {item.Title}{" "}
//               </h2>
//               <h2 className="movie--column" data-select={item.Id}>
//                 {item.Running_Time_min}
//               </h2>
//               <h2 className="movie--column" data-select={item.Id}>
//                 {item.Release_Date}
//               </h2>
//               <h2 className="movie--column" data-select={item.Id}>
//                 {item.IMDB_Rating ? item.IMDB_Rating : "-"}
//               </h2>
//               <h2 className="movie--column" data-select={item.Id}>
//                 {item.Major_Genre ? item.Major_Genre : "Not available"}
//               </h2>
//             </div>
//             <div data-delete={item.Id}>
//               <button data-delete={item.Id} onClick={deleteLine}>
//                 Delete line
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// }
