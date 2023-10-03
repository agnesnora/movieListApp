import "./App.css";
import { useEffect, useState } from "react";
import Movies from "./components/Movies";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Message from "./components/Message";

function App() {
  // const [isShown, setIsShown] = useState();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShown(true);
  //   }, 2000);
  //   setTimeout(() => {
  //     setIsShown(false);
  //   }, 6000);
  // }, []);
  return (
    <>
      <Header />

      <Movies />

      <Footer>2023 Popcorn MovieListApp</Footer>
    </>
  );
}

export default App;
