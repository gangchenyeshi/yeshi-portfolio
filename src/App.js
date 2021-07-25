import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";


// Components
import Navbar from "../src/components/navbar/Navbar.component";
import Header from "../src/components/header/Header.component"
import About from "../src/pages/about/About.component";
import Skills from "../src/pages/skills/Skills.component";
import Training from "../src/pages/training/Training.component";
import Portfolio from "../src/components/projects/Portfolio.component";
import Contact from "../src/pages/contact/Contact.component";
import Footer from "../src/pages/footer/Footer.component";

function App() {
  return (

    <>
      <Navbar />

      <Header />
      <About />
      <Skills />
      <Training />
      <Portfolio />
      <Contact />

      <Footer />
    </>

  );
}

export default App;
