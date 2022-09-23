import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Project from "./components/Project";
import NavBar from "./components/Nav";
import Home from "./components/Home"
import Tecnologies from "./components/Tecnologies"

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Tecnologies />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
