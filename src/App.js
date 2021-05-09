import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";


// Components
import Navbar from "../src/components/navbar/Navbar.component";
import Header from "../src/components/header/Header.component";
import About from "../src/pages/about/About.component";
import Skills from "../src/pages/skills/Skills.component";



function App() {
  return (
    <>
      <Navbar />
      <Header />
      {/* <div className="parallex">
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
      </div> */}
      <About />
      
      <Skills />
    </>

  );
}

export default App;
