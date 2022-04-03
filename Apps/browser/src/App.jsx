import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <Header />
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;
