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
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");
  window.addEventListener("mousemove",function(e){
  const posX = e.clientX;
  const posY = e.clientY;
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
   }, {duration: 500, fill: "forwards"})
  });
  return (
    <div>
      <div class="cursor-dot" data-cursor-dot></div>
      <div class="cursor-outline" data-cursor-outline></div>
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
