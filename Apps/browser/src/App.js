import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
