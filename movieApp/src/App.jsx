import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
          </Route>
        </Routes>
        {/* <Movies /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
