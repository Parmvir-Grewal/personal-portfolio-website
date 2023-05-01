import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import ReactGA from 'react-ga4';
import Header from "./components/Header";
ReactGA.initialize("G-B15RW0RCTP");

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Home />
      <About/>
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
