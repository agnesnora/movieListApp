import "./App.css";

import Movies from "./components/Movies";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Movies />

      <Footer>2023 Popcorn MovieListApp</Footer>
    </>
  );
}

export default App;
