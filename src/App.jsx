import "./App.css";

import Movies from "./components/Movies";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import PopUp from "./components/PopUp";
// import { useEffect, useState } from "react";
function App() {
  // const [isShown, setIsShown] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("popup");
  //     setIsShown(true);
  //   }, 2000);
  //   // setTimeout(() => {
  //   //   console.log("pcili");
  //   //   setIsShown(false);
  //   // }, 2000);
  // }, []);
  return (
    <>
      <Header />
      {/* {isShown ? <PopUp /> : null} */}
      <Movies />

      <Footer>2023 Popcorn MovieListApp</Footer>
    </>
  );
}

export default App;
