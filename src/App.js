import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import ReactGA from 'react-ga4';
import ScrollToTop from "react-scroll-up";
import {BsFillArrowUpSquareFill} from 'react-icons/bs';

ReactGA.initialize("G-B15RW0RCTP");

function App() {
  return (
    
    <div>
      <ScrollToTop showUnder={800} style={{ bottom:"25px", right:"25px", zIndex:10}}>
        <span className="bg-white text-slate-300 hover:text-white rounded-lg hover:scale-105 duration-200">
          <BsFillArrowUpSquareFill size={45}/>
        </span>
      </ScrollToTop>
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
