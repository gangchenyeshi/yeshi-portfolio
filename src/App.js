import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
// npm
import Fade from 'react-reveal/Fade';
import { Parallax, Background } from 'react-parallax';
import Container from "react-bootstrap/Container";

// Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "../src/pages/about/About.component";



function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="parallex">
        <Parallax
          blur={10}
          bgImage={require("./assets/img/parallex/background.jpg")}
          bgImageAlt=""
          strength={200}
        >
          <Container className="container-box rounded">
            <Fade left>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
    </>

  );
}

export default App;
