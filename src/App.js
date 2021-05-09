import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";


// Components
import Navbar from "../src/components/navbar/Navbar.component";
import Header from "../src/components/header/Header.component"
import About from "../src/pages/about/About.component";
import Skills from "../src/pages/skills/Skills.component";
import Training from "../src/pages/training/Training.component"



function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Training />
    </>

  );
}

export default App;
