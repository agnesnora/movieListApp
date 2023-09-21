import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Movies from "./components/Movies";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Header />

      <Movies />

      <Footer>2023 MovieListApp</Footer>
    </>
  );
}

export default App;
