import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import Store from "./Store/Store";
import { useContext } from "react";

function App() {
  const { set2 } = useContext(Store);
  return (
    <div className="App">
      <Header set2={set2} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
