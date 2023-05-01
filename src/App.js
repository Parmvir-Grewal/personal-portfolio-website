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
import React from "react";
import AnimatedCursor from "react-animated-cursor";
ReactGA.initialize("G-B15RW0RCTP");




function App() {
  return (
    <div>
      <AnimatedCursor
      innerSize={20}
      outerSize={35}
      outerScale={1.7}
      innerScale={0.8}
      trailingSpeed={8}
      color='203,213,225' />
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
